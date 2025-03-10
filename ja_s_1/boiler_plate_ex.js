class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  
    age(x) {
      return x - this.year;
    }
  
    static create(name, year) {
      return new Car(name, year);
    }
  }
  
  const myCar = Car.create("Toyota", 2015);
  console.log(myCar); // Car { name: 'Toyota', year: 2015 }
  