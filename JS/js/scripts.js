//Titulo da pagina
var titulo = document.querySelector(".titulo"); // seleciona a tag h1
titulo.textContent = "Novo Titulo"; //insere na tag h1 novo texto entre as aspas

//Titulo da Tabela
var nomeTabela = document.querySelector(".nome-tabela");
nomeTabela.textContent = "Nome Dinâmico Table";


//pegando a primeira TD
var paciente = document.querySelectorAll(".paciente");
console.log(paciente);
//pegando o conteudo da tr com nome
var tdNome = paciente.querySelector(".info-nome");
var nome = tdNome.textContent;
console.log(nome);
//pegando o conteudo da tr com peso
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(peso);

//pegando o conteudo da tr com altura
var  tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);

//pegando o conteudo da tr com o valor de IMG já sendo calculado
var tdImc = paciente.querySelector(".info-imc");
var pesoEhValido = true;
var alturaEhValida = true;

//Condicoes criadas para IMC
if (peso <= 0 || peso >= 500) {
    console.log("Peso fora da faixa");
    pesoEhValido = false;
    tdPeso.textContent = "Peso Inválido";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura fora da faixa");
    alturaEhValida = false;
    tdAltura.textContent = "Altura Inválida";
}

//Calculando IMC com condicao de liberacao...
if (pesoEhValido && alturaEhValida) {
    var imc = peso/(altura*altura);
    tdImc.textContent = imc;
}
