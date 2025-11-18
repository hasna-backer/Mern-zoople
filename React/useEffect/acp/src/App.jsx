import { useState, useEffect } from "react";

export default function App() {
  const [text, setText] = useState("");

  // useEffect to log the value whenever it changes
  useEffect(() => {
    console.log("Input changed:", text);
  }, [text]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useEffect Input Logger</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "250px",
        }}
      />
    </div>
  );
}
