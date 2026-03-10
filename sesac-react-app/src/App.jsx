import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import JsxBase from "./components/jsx_prac/JsxBase";
import PropsBase from "./components/props_prac/PropsBase";
import ChildrenBase from "./components/children_prac/ChildrenBase";
import RenderingBase from "./components/rendering_prac/RenderingBase";
import RenderingProb from "./components/rendering_prob/RenderingProb";
import EventBase from "./components/event_prac/EventBase";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <JsxBase />
      <PropsBase />
      <ChildrenBase />

      <div>
        <div className={styles.container}>
          <h1 className={styles.title}>Hello World</h1>
        </div>
        <div className={`${styles.container} ${styles.active}`}>
          여러 클래스 적용
        </div>
      </div>

      <div className="text-3xl font-bold text-red-500">Goodbye World</div>

      <div className="flex justify-between text-2xl">
        <div>1번</div>
        <div>2번</div>
      </div>

      <div>
        <RenderingBase />
      </div>

      <div>
        <RenderingProb />
      </div>

      <div>
        <EventBase />
      </div>
    </>
  );
}

export default App;
