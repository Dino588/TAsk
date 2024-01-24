const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heightJhon = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJhon = massJhon / heightJhon ** 2;
const markHigherBMI = bmiMark > bmiJhon
console.log(bmiMark, bmiJhon, markHigherBMI);