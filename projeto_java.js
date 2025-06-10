let numero1 = parseFloat(prompt("Digite um numero: "));
let numero2 = parseFloat(prompt("Digite outro número: "))
let resultado1 = numero1 + numero2 

alert("A soma dos dois números é: " + resultado1)

let nome1 = prompt("Digite o seu nome: ")
let nome2 = prompt("Digite o seu sobrenome: ")
alert("Olá " + nome1 +" "+ nome2) 

let valor1 = parseFloat(prompt("Digite um valor em Real: "))
let precoDolar = valor1 * 5.25


let arredondado = Math.round( precoDolar);
alert("seu dinheiro em Dolar é: " + arredondado + "U$")

let largura = parseFloat(prompt("Me diga qual a largura do seu terreno (em metros quadrados): "));
let tamanho = parseFloat(prompt("Agora me diz qual o tamanho do seu terreno (em metros quadrados): "));
let tamanhoGeral = largura * tamanho
let valorDoTerreno = parseFloat(prompt("Quanto vale o metro quadrado do seu terreno?: "));
let precoTerreno =Math.round(tamanhoGeral * valorDoTerreno)
alert("Seu terreno vale: " + precoTerreno + "R$")

let distancia = prompt("Qual foi a distancia percorrida nessa viagem?: ")
let gasolina = prompt("Quanto de gasolna você ultilizou nessa viagem?: ")
let custoViagem = distancia / gasolina
Math.round(custoViagem)
alert("Nessa viagem voce ultilizou: " + custoViagem + "KmL")

let nota1 = parseFloat(prompt("Quanto voê tirou no primeiro bimestre?: "))
let nota2 = parseFloat(prompt("Quanto voê tirou no segundo bimestre?: "))
let nota3 = parseFloat(prompt("Quanto voê tirou no terceiro bimestre?: "))
let nota4 = parseFloat(prompt("Quanto voê tirou no quarto bimestre?: "))
let media = nota1 + nota2 + nota3 + nota4 
let arredondado2 = Math.round( media /4 )
alert("sua media final é " + arredondado2)
