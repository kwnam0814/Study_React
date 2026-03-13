from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, select
from sqlalchemy.orm import Session, Mapped, mapped_column, DeclarativeBase, sessionmaker


# --- DB 설정 ---

engine = create_engine("postgresql://postgres:user1234@localhost:5432/todo")
# {비밀번호} 다 지워야 함
SessionLocal = sessionmaker(bind=engine)


class Base(DeclarativeBase):
    pass


# --- FastAPI 설정 ---

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# --- 모델 ---


class Todo(Base):
    __tablename__ = "todos"

    id: Mapped[int] = mapped_column(primary_key=True)
    text: Mapped[str]
    done: Mapped[bool] = mapped_column(default=False)


Base.metadata.create_all(bind=engine)

# --- API ---


@app.get("/todos")
def get_todos(db: Session = Depends(get_db)):
    stmt = select(Todo).order_by(Todo.id)
    return db.scalars(stmt).all()


@app.post("/todos")
def create_todo(data: dict, db: Session = Depends(get_db)):
    todo = Todo(text=data["text"])
    with db.begin():
        db.add(todo)
    db.refresh(todo)
    return todo


@app.put("/todos/{todo_id}")
def update_todo(todo_id: int, data: dict, db: Session = Depends(get_db)):
    with db.begin():
        todo = db.scalar(select(Todo).where(Todo.id == todo_id))
        todo.text = data["text"]
    db.refresh(todo)
    return todo


@app.put("/todos/{todo_id}/toggle")
def toggle_todo(todo_id: int, db: Session = Depends(get_db)):
    with db.begin():
        todo = db.scalar(select(Todo).where(Todo.id == todo_id))
        todo.done = not todo.done
    db.refresh(todo)
    return todo


@app.delete("/todos/{todo_id}")
def delete_todo(todo_id: int, db: Session = Depends(get_db)):
    with db.begin():
        todo = db.scalar(select(Todo).where(Todo.id == todo_id))
        db.delete(todo)
    return {"message": "삭제 완료"}
