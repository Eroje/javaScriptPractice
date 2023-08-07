

function factorial(number) {
    if (number === 0) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  };
  
  factorial(6); // returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 
  