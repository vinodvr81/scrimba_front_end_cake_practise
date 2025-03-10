class Car {
    #name;
    #year;
    constructor(name, year) {
      this.#name = name;
      this.#year = year;
    }
    age(currentYear = new Date().getFullYear()) {
      return currentYear - this.#year;
    }
  }
 const myCar = new Car("BMW", "2000")

  console.log(myCar); 