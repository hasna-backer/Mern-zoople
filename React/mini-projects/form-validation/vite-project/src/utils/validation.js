// utils/validation.js

export const validateField = (name, value, form) => {
	let error = "";
  
	switch (name) {
	  case "name":
		if (!value.trim()) error = "Name is required";
		break;
  
	  case "email":
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(value))
		  error = "Enter a valid email address";
		break;
  
	  case "password":
		if (value.length < 8)
		  error = "Password must be at least 8 characters";
		break;
  
	  case "confirmPassword":
		if (value !== form.password)
		  error = "Passwords do not match";
		break;
  
	  default:
		break;
	}
  
	return error;
  };
  
  export const getPasswordStrength = (password) => {
	if (!password) return { label: "", score: 0 };
  
	let score = 0;
  
	if (password.length >= 8) score++;
	if (/[A-Z]/.test(password)) score++;
	if (/[0-9]/.test(password)) score++;
	if (/[^A-Za-z0-9]/.test(password)) score++;
  
	switch (score) {
	  case 1:
		return { label: "Weak", score };
	  case 2:
		return { label: "Medium", score };
	  case 3:
	  case 4:
		return { label: "Strong", score };
	  default:
		return { label: "Very Weak", score };
	}
  };
  