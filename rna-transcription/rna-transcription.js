/* const DNA =['A','C','G','T'];
const RNA = ['U','G','C','A']; */

const complements = {
  'A':'U',
  'C':'G',
  'G':'C',
  'T':'A'
};

export const toRna = (input) => {
return input.split('').map(DNA => complements[DNA]).join('');

}

/*
export const toRna = (input) => {
  let newRNA = '';
  for (const DNA of input){
    newRNA += complements[DNA]
  }
  return newRNA;

}
*/
  /*
  let nucleotides = Array.from(input);
  let newRNA = '';
  
  for (let i = 0; i < input.length; i++) {
    newRNA += RNA[DNA.indexOf(nucleotides[i])];
  };
  return newRNA;

}; */
