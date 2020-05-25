//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let feedback = [
  "Sure.",
  "Whoa, chill out!",
  "Calm down, I know what I'm doing!",
  "Fine. Be that way!",
  "Whatever."
];

export const hey = (message) => {
let a, b;
let compressedMessage = message.trim();
if ( compressedMessage == '' || message.includes('\\')) {        
  return feedback[3];
}
else if (compressedMessage[compressedMessage.length-1] == '?') {
    a = true;
}
  if (message == message.toUpperCase() && message !== message.toLowerCase() ) {
    b = true;
}
  if (a && !b) {
    return feedback[0];
  }
  else if (b && !a) {
    return feedback[1];
  }
  else if (b && a) {
    return feedback[2];
  }
  else return feedback[4];
};
