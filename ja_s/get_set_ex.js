// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    set lang(value) {
      this.language = value;
    }
  };
  
  // Set a property using set:
  person.lang = "en";
  
  // Display data from the object:
  document.getElementById("demo").innerHTML = person.language;