import { useState } from "react";

function Message() {
  const [text, setText] = useState("Hello!");

  const changeText = () => {
    setText("Welcome to React!");
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={changeText}>Change Text</button>
    </div>
  );
}

export default Message;
