import { useState, useEffect } from "react";

function CounterTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) {
      document.title = "Counter Reset";
    } else {
      document.title = `Count is ${count}`;
    }
  }, [count]); // runs only when count changes

  return (
    <div style={{ padding: "20px" }}>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default CounterTitle;
