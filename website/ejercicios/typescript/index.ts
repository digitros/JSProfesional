//Boolean

let muted: boolean = true;
muted = false;

//numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

//String
let nombre: string = 'Diego';
let saludo= `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ["Isable", "Nicole", "Raul"];
// people.push("9000");

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Diego");
peopleAndNumbers.push(9000);

//Enum
enum Color{
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es: ${colorFavorito}`);

//Any
let comodin: any = "Joker";
comodin = {type: 'Wildcard'}

//Object
let someObject: object = {
    type: "Wildcard",
}

//Funciones
function add(a: number, b: number): number{
    return a + b;
}

const sum = add(4, 6);

function createAdder(a: number): (number) => number{
    return function (b: number){
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName?: string): string{
    return `${firstName} ${lastName}`
}

const diego = fullName("Diego");

function fullName2(firstName: string, lastName: string = "Valdez"): string{
    return `${firstName} ${lastName}`
}

const diego2 = fullName("Diego");


//Interfaces

interface Rectangulo {
    ancho: number,
    alto: number,
    color?: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo
}

function area(r: Rectangulo){
    return r.alto * r.ancho
}

const areaRect = area(rect);
console.log(areaRect)

rect.toString = function(){
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}

console.log(rect.toString())

