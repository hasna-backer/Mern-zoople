function validateForm(e) {
	e.preventDefault();	
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const error = document.getElementById("error");
	// Clear old error
	error.textContent = "";
  
	// Username validation
	if (username === "") {
	  error.textContent = "Username is required";
	  return false;
	}
  
	if (username.length < 4) {
	  error.textContent = "Username must be at least 4 characters";
	  return false;
	}
  
	// Password validation
	if (password === "") {
	  error.textContent = "Password is required";
	  return false;
	}
  
	if (password.length < 6) {
	  error.textContent = "Password must be at least 6 characters";
	  return false;
	}
  
	// If everything is valid
	alert("Form submitted successfully");
	return true;
  }
  


  