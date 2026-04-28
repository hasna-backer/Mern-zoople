// Select form
let form = document.getElementById("myForm");
console.log(form);

// Listen for submit
form.addEventListener("submit", function(event) {
  
  // Stop page reload
  event.preventDefault();
  alert("Form submitted successfully!");
  console.log("Form submitted successfully!");
});
