// Create an Object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
  }
  
  // Display all Properties
  document.getElementById("demo").innerHTML = Object.getOwnPropertyNames(person);