/* Input:
i.like.this.program.very.much
pqr.mno

Output:
much.very.program.this.like.i
mno.pqr */

export const reverseWord = (word) => {
  if (word) {
    return word.split('.').reverse().join('.');
  } else {
    return '';
  }
};
