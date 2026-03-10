import React from "react";
import Card1 from "./Card1";
import Layout from "./Layout";
import Button from "./Button";
import Card2 from "./Card2";

const ChildrenBase = () => {
  return (
    <>
      <div>ChildrenBase</div>
      <Card1 />
      <Card1>내용물을 채워넣는겁니다.</Card1>
      <Card1 title="하하">
        <h1>안녕하세요</h1>
        <div>jsx같은 것도 전달할 수 있습니다.</div>
      </Card1>
      <div>
        <Layout>
          <p>메인 페이지에 오신 것을 환영합니다.</p>
        </Layout>
        <Layout>
          <p>안녕하세요. 반갑습니다!</p>
        </Layout>
      </div>
      <div>
        <button>여기에 내용을 적습니다.</button>
        <br />
        <Button backgroundColor="blue">확인</Button>
        <Button backgroundColor="red">취소</Button>
        <Button backgroundColor="grey">보류</Button>
        <Button backgroundColor="pink">1억년</Button>
      </div>
      <div>
        <Card2 title="공지사항">
          <p>내일은 휴무입니다.</p>
        </Card2>
        <Card2 title="이벤트">
          <p style={{ fontWeight: "bold" }}>할인 행사 진행 중!</p>
          <p>신규 회원 가입 이벤트!</p>
        </Card2>
      </div>
    </>
  );
};

export default ChildrenBase;
