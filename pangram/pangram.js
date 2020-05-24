//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const alph = "abcdefghijklmnopqrstuvwxyz".split('');
export const isPangram = (input) => {
const sentence = input.toLowerCase().split('');
  for (const letter of alph) {
    if (sentence.indexOf(letter)<0){
      return false;
    } 
  }
  return true;
};
