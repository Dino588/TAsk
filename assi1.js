//values and variable//
const country = "india"
const continent = "Asia"
const population = BigInt(1428627663)
console.log(country , continent , population)

//data types//
const  isIsland = false
const language 
console.log( isIsland , country , population , language);


language = "malayalam"

// basic operators//
const halfPopulation = parseInt(population) / 2
console.log(halfPopulation)

populationIncrement = parseInt(population) + 1
console.log(populationIncrement)



const finlandPopulation = BigInt(6000000)
if ( population > finlandPopulation){
    console.log("true")
}else {
    console.log("False")
}


const averagePopulation = BigInt(33000000)
if (averagePopulation > population){
    console.log("True")
} else {
    console.log("False")
}

const description = "'Portugal is in Europe, and its 11 million people speak portuguese"
console.log(




// taking decision: if / else statement//
population = 13
population = 130


if(population > averagePopulation){
    console.log("Portugal's population is above average")
} else{
    console.log("'Portugal's population is 22 million below average")
}


// type conversion and coercion//
console.log('9' - '5')
console.log('19' - '13' + '17')
console.log( '19' - '13' + 17 )
console.log( '123' < 57 )
console.log(5 + 6 + '4' + 9 - 4 - 2)

let numNeighbours =1


// let numNeighbours = prompt('How many neighbour countries does your country have?'); 
if (numNeighbours == 1) {
  console.log('Only 1 border!');
} 
else if (numNeighbours > 1) {
  console.log('More than 1 border');
} 
  console.log('No bodars');


numNeighbours = 1

if ( numNeighbours > 1){
    console.log("more than one boarder")
} else {
    console.log("No boarder")
}


numNeighbours = parseInt(numNeighbours);
if (numNeighbours === 1) {
    console.log('Only 1 border!');
  } else if (numNeighbours > 1) {
    console.log('More than 1 border');
  } else {
    console.log('No borders');
  }

// string and template literals//
const speaksEnglish = true;
population = 40000000;  
isIsland = false;  


if (speaksEnglish && population < 50000000 && !isIsland) {
    console.log('You should live in Portugal :)');
} else {
    console.log('Portugal does not meet your criteria :(');
}

// taking decision if/ else statement//
let languaGe = 'chinese'

switch(languaGe){
  case 'chinese || mandarin' :
    console.log('MOST number of native speakers!')
    break;
    
    case 'spanish':
    console.log('2nd place in number of native speakers')
    break;

        
    case 'English':
    console.log('3rd place')
    break;

    
    case 'hindi':
    console.log('Number 4')
    break;


    case 'arabic':
    console.log('5th most spoken language')
    break;

    default:
    console.log('Great language too :D')
      
}
// equality operators ==vs==

population = 3300000; 


let result = (population > 33000000) ? "Portugal's population is above average" : "Portugal's population is below average";
console.log(result);

// logical operators//
population = 13;
result = (population > 33000000) ? "Portugal's population is above average" : "Portugal's population is below average";
console.log(result);


//the switch statement//
population = 130;
result = (population > 33000000) ? "Portugal's population is above average" : "Portugal's population is below average";
console.log(result);


//the conditional operator//
population = 33000000;
result = (population > 33000000) ? "Portugal's population is above average" : "Portugal's population is below average";
console.log(result);