//= 
const a = 1

const person = {};

person.name = "Matheus";

person.age = 23;

console.log(person);

"---------------------------------------"

const car = {
    rodas : 4,
    portas : 4

}

car["cor"] = "Vermelho"

console.log(car);

const queroMudarEssaPosicao = "rodas";

car[queroMudarEssaPosicao] = 5;

console.log(car);

console.log(car[queroMudarEssaPosicao]);


//object properties
Object.defineProperty(car, "motor",{
   value:2.0,
   writable: false,

});

console.log(car);

car.motor = 3;

console.log(c);