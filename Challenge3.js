const scoreDolphines = (98+100+81)/3;
const scoreKoalas = (100+98+81)/3;

console.log(scoreDolphines,scoreKoalas);
if(scoreDolphines>scoreKoalas && scoreDolphines>=100){
console.log('Dolphines wins the game');
}
else if(scoreDolphines<scoreKoalas && scoreKoalas>=100){
    console.log('Koalas wins the game');
}
else if(scoreDolphines===scoreKoalas && scoreDolphines>=100 && scoreKoalas>=100){
console.log('Both wins the game')
}
else{
    console.log("no one wins the game");
}