// App.jsx
import { useState } from "react";
import Greetings from "./Greetings";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <Greetings isLoggedIn={loggedIn} />

      <button
        onClick={() => setLoggedIn(!loggedIn)}
        style={{ marginTop: "20px" }}
      >
        {loggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;
