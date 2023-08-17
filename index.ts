let numero:number = 200;
let segundoNumero: number = 100;

console.log(numero + segundoNumero);

let idade:number =16;
let texto: string = "Minha idade é: " + idade ;

console.log(texto);

let idadenova:number =16;
let textonovo: string = "minha idade é: " ;

console.log(textonovo +idadenova);

let verdadeiro: boolean = true;
console.log(verdadeiro);

let arr: number[] = [1,2,3,4,10,50,60];
console.log(arr);
console.log("Tamanho  do array: " + arr.length);
console.log("acessando a posicao do array:" + arr[0]);
console.log(arr.indexOf(10));

let arrayTexto: Array<string>;
arrayTexto = ['ab', 'bc', 'cd', 'de'];

console.log(arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('ab')); 
 
function exibirTexto(){
    console.log('Exibindo meu Texto');
}
exibirTexto();
 
function exibindoOutroTexto(){
    return "Exibindo outro Texto ";
}

console.log(exibindoOutroTexto());

function retornaNumero(): number {
    return 15;
}

console.log(retornaNumero());

function retornaTexto(): string{
    return "retornando string";
}

console.log(retornaTexto());


function soma(a: number, b: number): number {
    return a + b;
}

console.log("o valor da soma é:" + soma(50, 100));

function multiplicar(a: number, b: number): number {
    return a * b;
}
 
console.log("o valor da mutiplição é:" + multiplicar(5, 5));

function number (a:number, b:number, c: number) : number {
    return (a + b)* c
}
console.log("o valor da funcao é:" + number(5,5,5));

function mutiplicao(a: number,b: number): string{
    return "o resultado da mutiplicacao e: " + (a * b);
}
console.log(mutiplicao(6,6));