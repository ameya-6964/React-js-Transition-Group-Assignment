import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./index.css";
const App = () =>  {
   let [text, setText] = useState("My Name Is Ameya Belvalkar");

  const toggleTransition = () => {
     setText(text === "My Name Is Ameya Belvalkar" ? "I Am Learning Full Stack Web Development" : "My Name Is Ameya Belvalkar");
  };

  return (
    <div className="App">
      <h1>React Homework Assignment 21-12-2022</h1>
      <SwitchTransition mode="out-in">
        <CSSTransition
          classNames="fade"
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          key={text}
        >
          <div class="text">{text}</div>
        </CSSTransition>
      </SwitchTransition>
      <button onClick={toggleTransition}>Toggle Text</button>
    </div>
  );
}

export default App;
