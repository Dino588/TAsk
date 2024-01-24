const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heightJhon = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJhon = massJhon / (heightJhon*heightMark);

console.log(bmiMark, bmiJhon,);

if(bmiMark > bmiJhon){
console.log(`Marks BMI is higher ${bmiMark} than Jhons BMI ${bmiJhon}`)
}
else {
console.log(`Jhons BMI is higher ${bmiJhon} than Marks BMI ${bmiMark}`)    
}