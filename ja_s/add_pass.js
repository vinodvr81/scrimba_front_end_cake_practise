function sumAll() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  document.getElementById("demo").innerHTML = sumAll(1, 123, 500, 115, 44, 88);