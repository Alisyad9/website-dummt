console.log();
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// below is codewars

// function name(a, b) {
//   a === b
//     ? console.log('a and b, are the same value')
//     : console.log('not the same value');
// }
// const newNumber = (c, d) => c + d;
// 2, 2;

// console.log(newNumber(2, 2));

// function findShort(s) {
//   let stringWord = s.split(' ');
//   console.log(stringWord);

//   let short = stringWord[0].length;
//   console.log(short);
//   for (let i = 0; i < stringWord.length; i++) {
//     if (stringWord[i].length < short) {
//       short = stringWord[i].length;
//     }
//   }

//   return short;
// }

// console.log(findShort('2e w knows perhaps'));
var n = [1, 2, 3, 3];
function findShort(s) {
  return s
    .split(' ')
    .map((a) => a.length)
    .reduce((a, b) => Math.min(a, b));
}

function numbersOnly(value) {
  let result = [];
  // result.push(...value);
  console.log(result);
  // if (typeof value === 'number') {
  //   console.log('number');
  // } else {
  //   console.log(['string', 2, 1, 3]);
  // }
  // return value;
}

numbersOnly([1, 2, 3, 4, '22'][(2, 2, 3)]);

// console.log(reverse('how are you doing MR Baalwaan'));

// function reverse(string) {
//   let finalString = '';
//   var result = [];
//   var result2 = [];
//   let tempLetter = string.split(' ');
//   for (let i = 0; i < tempLetter.length; i++) {
//     tempLetter[i];
//     // console.log(i);
//     if (i % 2 && i >= 0) {
//       result = tempLetter[i].split('').reverse('').join('');
//       result2.push(result);
//       console.log(result);
//       // console.log(tempLetter[i]);
//     } else {
//       result2.push(tempLetter[i]);
//       // console.log(tempLetter[i]);
//     }
//   }
//   finalString = result2;
//   return finalString.join(' ').trim('');
// }

// console.log(reverse('Sfinnally it works, my friend      as    sadas'));

let inList = (a, b) => {
  var testArrat = [];

  // let resulta = [];
  // let resultb = [];
  // resulta.push(...a);
  // resultb.push(b);
  // console.log(resulta);

  for (let i = 0; i < a.length; i++) {
    testArrat.push(a[i]);
    console.log(a[i]);
    for (let j = 0; j < b.length; j++) {
      console.log(b[j].length);

      // if (a[i].indexOf(b)) {
      // }
    }
    // s
    console.log(a[i]);

    // if (a[i].indexOf(b) !== -1) {
    //   console.log(' present');
    //   if (a === b) break;
    //   {
    //   }
  }

  return testArrat;
};

// console.log(inList([1, 2, 3, 4], [1, 2]));

// function isValidWalk(walk) {
//   var north = 0;
//   var south = 0;
//   var east = 0;
//   var west = 0;
//   if (walk.length === 10) {
//     for (let iterator of walk) {
//       console.log(str1[iterator]);
//       if (iterator === 'n') north++;
//       if (iterator === 's') south--;
//       if (iterator === 'e') east++;
//       if (iterator === 'w') west--;
//     }
//   } else {
//     return false;
//   }
//   return north || (south === 0 && east) || west === 0;
// }

// function filter_list(numberOnly) {
//   let resultFilter = [];
//   let element = [];
//   for (let index = 0; index < numberOnly.length; index++) {
//     element.push(numberOnly[index]);

//     console.log(element);
//     // console.log(l[index]);
//   }
//   let number = 0;
//   resultFilter = element.typeof(number);

//   console.log();

//   return resultFilter;
// }

// function filter_list(a, b) {
//   let resultFilter = [];
//   let emptyArray = [];

//   if (a.length === 0) return emptyArray;

//   a.forEach((elementA) => {
//     console.log(elementA);

//     if (b.indexOf(elementA) === -1) resultFilter.push(elementA);
//     else return emptyArray;
//   });
//   b.forEach((elementB) => {
//     console.log(elementB);
//     if (a.indexOf(elementB) === -1) resultFilter.push(elementB);
//   });

//   return resultFilter;
// }
// console.log(filter_list([1, 2, 3, 4], [2, 1]));

// function addNumber(a, b) {
//   return addNumber.filter;
// }

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filter array items based on search criteria (query)
 */
// const filterItems = (arr, query) => {
//   return arr.filter(
//     (el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   );
// };

// console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
// console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']

// function alphabetPosition(text) {
//   let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let upperCase = text.toUpperCase();
//   let emptyArray = [];

//   for (let key in upperCase) {
//     if (upperCase.hasOwnProperty.call(upperCase, key)) {
//       let element = upperCase[key];
//       console.log(element);
//       element = letters.indexOf(upperCase[key]);
//       console.log(element);
//       if (element === -1) {
//         continue;
//       } else {
//         emptyArray.push(element + 1);
//       }
//     }
//   }
//   return emptyArray.join('');
// }
// console.log(alphabetPosition('how are you doing'));

// var moveZeros = (arr) => {
//   let result = [];
//   let result2 = [];
//   arr.forEach((element) => {
//     console.log(element);

//     element !== 0 ? result.push(element) : result2.push(element);
//   });
//   return result.concat(result2);
// };

// console.log(moveZeros([0, 0, 1, null, false, 2, 3, 0, 4, 2, 0, 8]));

// function pigIt(str) {
//   let stringName = str.split(' ');
//   let result = [];

//   stringName.forEach((element) => {

//     if (element.match(/[A-z]/i)) {
//       result.push(`${element.substr(1)}${element.substr(0, 1)}ay`);
//     } else {
//       result.push(`${element.substr(1)}${element.substr(0, 1)}`);
//     }
//   });

//   return result.join(' ');
// }

// function pigIt(str) {
//   const arr = str.split(' ');

//   return arr
//     .map((word) => {
//       return word.match(/[A-z]/i)
//         ? `${word.substr(1)}${word.substr(0, 1)}ay`
//         : word;
//     })
//     .join(' ');
// }

// console.log(pigIt('Pig latin is cool ? !'));

// function rgb(r, g, b) {
//   red = r;
//   green = g;
//   blue = b;
//   function RGBhex(params) {}
//   if ((red > 255, green > 255, blue > 255)) {
//     console.log('true');
//     return 'FF';
//   } else if ((red < 0, green < 0, blue < 0)) {
//     console.log('false');
//     return '00';
//   }
//   green.length == 1 ? '0' + green : green;
//   blue.length == 1 ? '0' + blue : blue;

//   if (red.length == 1) red = '0' + red;
//   if (green.length == 1) green = '0' + green;
//   if (blue.length == 1) blue = '0' + blue;

//   return red + green + blue;
// }

// console.log(rgb(-1, -1, 263));

// function componentToHex(c) {G
//   var hex = c.toString(16);
//   return hex.length == 1 ? '0' + hex : hex;

//   function rgbToHex(r, g, b) {
//     return componentToHex(r) + componentToHex(g) + componentToHex(b);
//   }
// }
// console.log(rgbToHex(255, 255, 300));
var rgbToHex = function (rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
};
var fullColorHex = function (r, g, b) {
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red + green + blue;
};
console.log(fullColorHex(255, 255, 300));

// function humanReadable(seconds) {
//   //   changing the second into hours
//   let hoursInSeconds = ('0' + parseInt(seconds / (60 * 60))).slice(-2);
//   console.log(hoursInSeconds);
//   //   changing the second into minutes
//   let minutesInSeconds = ('0' + parseInt((seconds / 60) % 60)).slice(-2);
//   console.log(minutesInSeconds);
//   //  changing the second into seconds, slice to only return two right most number, examp
//   //example with slice(-2) in this arry [2,2,3,4] would return 3,4.
//   let secSeonds = ('0' + (seconds % 60)).slice(-2);
//   console.log(secSeonds);

//   return `${hoursInSeconds}:${minutesInSeconds}:${secSeonds}`;

// }
// console.log(humanReadable(10));

function rgb(r, g, b) {
  function funct(number) {
    if (number > 255) {
      return 'FF';
    } else if (number < 0) {
      return '00';
    } else {
      return number.toString(16).toUpperCase().padStart(2, '0');
    }
  }
  return funct(r) + funct(g) + funct(b);
}
console.log(rgb(291, 14, 192));

// function rot13(message) {
//   let result = '';
//   result = message.split('').reduce(result, (value) => {
//     // check if value is a letter
//     //if not return result + value
//     if (/[^A-z]/.test(value)) return result + value;
//     if (/[A-z]/i.test(value)) {
//       let shiftWord = String.fromCharCode(value.charCodeAt() + 13);
//       return shiftWord;
//     }
//   });
//   return result;
// }

let rot13 = (message) =>
  message.split('').reduce((endResult, value) => {
    if (/[^a-zA-Z]/.test(value)) return endResult + value;

    /////String lower case
    if (/[a-z]/.test(value)) {
      let shiftWord = String.fromCharCode(value.charCodeAt() + 13);

      if (/[a-z]/.test(shiftWord)) {
        return endResult + shiftWord;
      }

      return endResult + String.fromCharCode(value.charCodeAt() - 13);
    }

    ////String upper case

    if (/[A-Z]/.test(value)) {
      let shiftWord = String.fromCharCode(value.charCodeAt() + 13);

      if (/[A-Z]/.test(shiftWord)) {
        return endResult + shiftWord;
      }

      return endResult + String.fromCharCode(value.charCodeAt() - 13);
    }
  }, '');

function newRot(newMessage) {
  let result = '';

  result = newMessage.split('').reduce((newResult, currentValue) => {
    if (/[^a-zA-Z]/.test(currentValue)) return newResult + currentValue;

    /////String lower case
    if (/[a-z]/.test(currentValue)) {
      let shiftWord = String.fromCharCode(currentValue.charCodeAt() + 13);

      if (/[a-z]/.test(shiftWord)) {
        return newResult + shiftWord;
      }

      return newResult + String.fromCharCode(currentValue.charCodeAt() - 13);
    }

    ////String upper case

    if (/[A-Z]/.test(currentValue)) {
      let shiftWord = String.fromCharCode(currentValue.charCodeAt() + 13);

      if (/[A-Z]/.test(shiftWord)) {
        return newResult + shiftWord;
      }

      return newResult + String.fromCharCode(currentValue.charCodeAt() - 13);
    }
  }, '');
  return result;
}

// Challenge 3  28 April 2021

// divisible is a function that accepts an array and returns all the values in that array which are divisible by three. Try using a higher order function (e.g. map, reduce...).
function divisible(array) {
  return array.filter((divThree) => divThree % 3 === 0);
}
function divisibleMap(array) {
  let result = [];
  array.map((n) => {
    if (n % 3 === 0) return result.push(n);
  });
  return result;
}
function divid3(numbers) {
  let result = [];
  numbers.reduce((accumulator, value) => {
    if (value % 3 === 0) result.push(value);
  });
  return result;
}

divisible([1, 2, 3, 4]); //expected: [3]
divisible([1, 3, 6, 13, 15]); //expected: [3, 6, 15]
divisible([21, 17, 12]); //expected: [21, 12]
