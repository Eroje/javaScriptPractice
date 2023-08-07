
function subLength(str, char) {
    let firstIndex = -1;
    let secondIndex = -1;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        if (firstIndex === -1) {
          firstIndex = i;
        } else if (secondIndex === -1) {
          secondIndex = i;
        } else {
  // More than 2 occurrences, return 0
          return 0;
        }
      }
    }
  // If exactly 2 occurrences found, return the length between them
    if (firstIndex !== -1 && secondIndex !== -1) {
      return secondIndex - firstIndex + 1;
    } else {
      // Less than 2 occurrences, return 0
      return 0;
    }
  }
  
  subLength('Saturday', 'a'); // returns 6
  subLength('summer', 'm'); // returns 2
  subLength('digitize', 'i'); // returns 0
  subLength('cheesecake', 'k'); // returns 0
  
  /* Challenge Que:
  Write a function subLength() that takes 2 parameters, a string and a single character. 
  The function should search the string for the two occurrences of the character and return the 
  length between them including the 2 characters. If there are less than 2 or more than 2 occurrences 
  of the character the function should return 0. */