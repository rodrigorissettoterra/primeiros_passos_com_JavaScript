//CÓDIGO
// PRIMEIROS PASSOS
// imprimindo texto na tela
console.log(`PRIMEIROS PASSOS`);
console.log('Hello, world!');

// definindo uma variável → Seu valor pode ser alterado
let variavel = 10;

// definindo uma constante → Seu valor não pode ser alterado
const pi = 3.14;

// imprimindo uma variável na tela
console.log(`Minha primeira variável armazenada:`,variavel); 

// imprimindo uma constante na tela
console.log(`Constante PI:`,pi); 

// OPERAÇÕES MATEMÁTICAS
// primeira operação matemática
console.log(``);
console.log(`MINHA PRIMEIRA OPERAÇÃO MATEMÁTICA`);
let var1 = 10;
let var2 = 5;
soma = var1 + var2;
console.log(`A soma de ${var1} e ${var2}, é:`,soma);

// CALCULADORA DE GASTOS COM COMBUSTÍVEIS
// definindo as variáveis
let preco = 6.51;
let consumo = 8.23;
let distancia = 100;

// realizando o cálculo de gasto
let gasto = (distancia / consumo) * preco;

// apresentando o resultado
console.log(``);
console.log(`CALCULADORA DE GASTOS COM GASOLINA`);
console.log(`Para uma viagem de ${distancia}km, com consumo médio de ${consumo}km/l e preço da gasolina a R$ ${preco}/litro, iremos gastar R$${gasto.toFixed(2)}.`);

// CONDICIONAIS
// VERIFICANDO SE UM NÚMERO É PAR OU ÍMPAR
console.log(``);
console.log(`VERIFICAÇÃO SE UM NÚMERO É PAR OU ÍMPAR`);
let numero1 = 11;
let numeroPar1 = numero1 % 2 === 0;
//console.log(numeroPar);

if (numeroPar1) {
    console.log(`o número ${numero1} é par.`);
} else {
    console.log(`o número ${numero1} é ímpar.`);
}

let numero2 = 6;
let numeroPar2 = numero2 % 2 === 0;

if (numeroPar2) {
    console.log(`o número ${numero2} é par.`);
} else {
    console.log(`o número ${numero2} é ímpar.`);
}

// CALCULADORA DE GASTOS COM COMBUSTÍVEIS (Álcool ou Gasolina)
// apresentando o resultado com condicional
console.log(``);
console.log(`CALCULADORA DE GASTOS COM COMBUSTÍVEL (Álcool ou Gasolina)`);
let distanciaViagem = 100;
let consumoGasolina = 8.23;
let consumoAlcool = 7.11;
let precoGasolina = 6.51;
let precoAlcool = 4.51;
let gastoGasolina = (distanciaViagem / consumoGasolina) * precoGasolina;
let gastoAlcool = (distanciaViagem / consumoAlcool) * precoAlcool;

console.log(`Para uma viagem de ${distanciaViagem}km, com consumo médio de ${consumoGasolina}km/l para gasolina,
     com consumoe médio de ${consumoAlcool}km/l, o preço da gasolina a R$${precoGasolina}/litro, 
     o preço do Álcool a R$${precoAlcool}/litro, iremos gastar R$${gastoGasolina.toFixed(2)} com Gasolina ou R$${gastoAlcool.toFixed(2)}
     com Álcool.`);

if (gastoGasolina > gastoAlcool) {
    console.log(`CONCLUSÃO: Abastecer com Álcool!`);
} else if (gastoGasolina < gastoAlcool) {
    console.log(`CONCLUSÃO: Abastecer com Gasolina!`);
} else {
    console.log(`CONCLUSÃO: Pode escolher qualquer combustível`);
}

// FUNÇÕES
// Criando uma função para receber uma variável e utilizá-la
console.log(``);
console.log(`Trabalhando com funções: Say My Name`);
function sayMyName(name) {
    console.log(`Your name is `+name);
}

sayMyName(`Rodrigo`);

// Criando uma função para fazer uma adição de juros sobre um valor
console.log(``);
console.log(`Trabalhando com funções: Cálculo de montante com juros`);

function incrementarJuros(valor, percentualJuros) {
    const montante = valor * (1 + percentualJuros / 100);

    console.log(`Valor inicial: R$ ${valor}
Taxa de juros: ${percentualJuros.toFixed(2)}%
Montante: R$ ${montante.toFixed(2)}`);
}

incrementarJuros(100, 15);

// Criando uma função para calcular IMC
console.log(``);
console.log(`calculadora de IMC`);

function calcularImc(peso, altura) {
    return peso / Math.pow(altura,2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return `Abaixo do peso`;
    } else if (imc >= 18.5 && imc < 25) {
        return `Peso normal`;
    } else if (imc >= 25 && imc < 30) {
        return `Sobrepeso`;
    } else if (imc >= 30 && imc < 35) {
        return `Obesidade Grau I`;
    } else if (imc >= 35 && imc < 40) {
        return `Obesidade Grau II`
    } else {
        return `Obesidade Grau III`
    }
}

function main() {
    const peso = 75;
    const altura = 1.75;
    const imc = calcularImc(peso, altura);
    console.log(`Para um peso de ${peso} kg e uma altura de ${altura} m, seu IMC, será: ${imc.toFixed(2)} e sua classificação, será:`, classificarImc(imc));
}

main();

// OBJETOS
// Criando um objeto pessoa

const joao = {
    nome: 'João',
    sobrenome: 'do Nascimento',
    anoNascimento: 1992,
    mesNascimento: 'abril',
    diaNascimento: 18,
    cidadeNascimento: 'Recife',
    estadoNascimento: 'Pernambuco',

    descrever: function () {
        console.log(this.nome + ' ' + this.sobrenome + ' nasceu no dia '+ this.diaNascimento + ' de ' + this.mesNascimento + ' de ' + this.anoNascimento + ', na cidade de ' + this.cidadeNascimento + ', que pertence ao estado de ' + this.estadoNascimento);
    }
}

console.log('');
console.log('TRABALHANDO COM OBJETOS');
joao.descrever();

// CLASSES
// Criando uma classe pessoa
class Pessoa {
    constructor(nome, sobrenome, anoNascimento, mesNascimento, diaNascimento, cidadeNascimento, estadoNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.anoNascimento = anoNascimento;
        this.mesNascimento = mesNascimento;
        this.diaNascimento = diaNascimento;
        this.cidadeNascimento = cidadeNascimento;
        this.estadoNascimento = estadoNascimento;
    }

    descrever () {
        console.log(
            this.nome + ' ' + this.sobrenome +
            ' nasceu no dia ' + this.diaNascimento +
            ' de ' + this.mesNascimento +
            ' de ' + this.anoNascimento +
            ', na cidade de ' + this.cidadeNascimento +
            ', que pertence ao estado de ' + this.estadoNascimento
        );
    }
}

// Criando uma instânica para pessoa
const bruna = new Pessoa('Bruna Carolina', 'Vieira Terra', 1985, 'dezembro', 9, 'São Paulo', 'São Paulo');
const rodrigo = new Pessoa('Rodrigo', 'Rissetto Terra', 1983, 'setembro', 14, 'São Paulo', 'São Paulo');

// Comparando dados de pessoas diferentes
console.log('');
console.log('TRABALHANDO COM CLASSES E INSTÂNCIAS');

function compararPessoas(p1, p2) {
    if (p1.anoNascimento > p2.anoNascimento) {
        return `${p2.nome} é mais velho(a) que ${p1.nome}.`;
    } else if (p1.anoNascimento < p2.anoNascimento) {
        return `${p1.nome} é mais velho(a) que ${p2.nome}.`;
    } else {
        return `${p1.nome} e ${p2.nome} possuem a mesma idade.`;
    }
}

console.log('');
console.log('Comparando dados de pessoas diferentes');
console.log(`Informações sobre ${bruna.nome} ${bruna.sobrenome}: Nasceu em ${bruna.cidadeNascimento}, no estado de ${bruna.estadoNascimento}, em ${bruna.diaNascimento}/${bruna.mesNascimento}/${bruna.anoNascimento}.`);
console.log(`Informações sobre ${rodrigo.nome} ${rodrigo.sobrenome}: Nasceu em ${rodrigo.cidadeNascimento}, no estado de ${rodrigo.estadoNascimento}, em ${rodrigo.diaNascimento}/${rodrigo.mesNascimento}/${rodrigo.anoNascimento}.`);
console.log('');
console.log(compararPessoas(bruna, rodrigo));

// LISTAS
console.log('');
console.log('TRABALHANDO COM LISTAS');

const nomes = ['Rodrigo','Bruna','José']
console.log(`Lista criada: ` + nomes)
console.log(`O primeiro nome registrado nesta listá é: ` + nomes[0])
console.log(`O segundo nome registrado nesta listá é: ` + nomes[1])
console.log(`O terceiro nome registrado nesta listá é: ` + nomes[2])

// Calculando média de notas e verificando se o aluno fez todas as provas

console.log('');
console.log('Calculando a média de 5 notas de provas e verificando se o aluno fez todas as atividades (usando for)');

const notas = []
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas = somaNotas + notas[i];
}

const media = (somaNotas / notas.length).toFixed(2)
console.log(`O aluno realizou ` + notas.length + ` atividades, suas notas foram: ` + notas + `, e sua média final, foi: ` + media)


//RESULTADOS OBTIDOS
[Running] node "c:\Users\rodrigo.terra\Área de Trabalho\primeiros_passos_com_JavaScript.js"
PRIMEIROS PASSOS
Hello, world!
Minha primeira variável armazenada: 10
Constante PI: 3.14

MINHA PRIMEIRA OPERAÇÃO MATEMÁTICA
A soma de 10 e 5, é: 15

CALCULADORA DE GASTOS COM GASOLINA
Para uma viagem de 100km, com consumo médio de 8.23km/l e preço da gasolina a R$ 6.51/litro, iremos gastar R$79.10.

VERIFICAÇÃO SE UM NÚMERO É PAR OU ÍMPAR
o número 11 é ímpar.
o número 6 é par.

CALCULADORA DE GASTOS COM COMBUSTÍVEL (Álcool ou Gasolina)
Para uma viagem de 100km, com consumo médio de 8.23km/l para gasolina,
     com consumoe médio de 7.11km/l, o preço da gasolina a R$6.51/litro, 
     o preço do Álcool a R$4.51/litro, iremos gastar R$79.10 com Gasolina ou R$63.43
     com Álcool.
CONCLUSÃO: Abastecer com Álcool!

Trabalhando com funções: Say My Name
Your name is Rodrigo

Trabalhando com funções: Cálculo de montante com juros
Valor inicial: R$ 100
Taxa de juros: 15.00%
Montante: R$ 115.00

calculadora de IMC
Para um peso de 75 kg e uma altura de 1.75 m, seu IMC, será: 24.49 e sua classificação, será: Peso normal

TRABALHANDO COM OBJETOS
João do Nascimento nasceu no dia 18 de abril de 1992, na cidade de Recife, que pertence ao estado de Pernambuco

TRABALHANDO COM CLASSES E INSTÂNCIAS

Comparando dados de pessoas diferentes
Informações sobre Bruna Carolina Vieira Terra: Nasceu em São Paulo, no estado de São Paulo, em 9/dezembro/1985.
Informações sobre Rodrigo Rissetto Terra: Nasceu em São Paulo, no estado de São Paulo, em 14/setembro/1983.

Rodrigo é mais velho(a) que Bruna Carolina.

TRABALHANDO COM LISTAS
Lista criada: Rodrigo,Bruna,José
O primeiro nome registrado nesta listá é: Rodrigo
O segundo nome registrado nesta listá é: Bruna
O terceiro nome registrado nesta listá é: José

Calculando a média de 5 notas de provas e verificando se o aluno fez todas as atividades (usando for)
O aluno realizou 5 atividades, suas notas foram: 5,7,8,2,5, e sua média final, foi: 5.40

[Done] exited with code=0 in 0.2 seconds
