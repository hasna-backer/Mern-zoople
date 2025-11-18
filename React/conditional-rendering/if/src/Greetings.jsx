// Greeting.jsx
function Greetings({ isLoggedIn }) {
	if (isLoggedIn) {
	  return <h2>Welcome Back!</h2>;
	} else {
	  return <h2>Please Login</h2>;
	}
  }
  
  export default Greetings;
  