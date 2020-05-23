//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const color = [
 'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'
];

export const decodedValue = (input) => {
return color.indexOf(input[0]) *10 + color.indexOf(input[1]);
};













/* for (expresión inicial; condición; expresión final) 
  let resistorCode;
  for (var i=0; i !== 10; i++) {
    if (color[i] == firstColor) {
        resistorCode = i*10;
    }
  }
  for (var i=0; i !== 10; i++) {
    if (color[i] == secondColor) {
        resistorCode += i;
    }
  }
return resistorCode;

}; */