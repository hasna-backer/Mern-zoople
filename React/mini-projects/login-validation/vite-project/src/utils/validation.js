// utils/validation.js

export const validateField = (name, value) => {
	let error = "";
  
	if (name === "username") {
	  if (!value.trim()) {
		error = "Username is required";
	  }
	}
  
	if (name === "password") {
	  if (value.length < 6) {
		error = "Password must be at least 6 characters";
	  }
	}
  console.log("hi from validation");
  
	return error;
  };
  