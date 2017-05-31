//Titulo da pagina
var titulo = document.querySelector(".titulo"); // seleciona a tag h1
titulo.textContent = "Novo Titulo"; //insere na tag h1 novo texto entre as aspas

//Titulo da Tabela
var nomeTabela = document.querySelector(".nome-tabela");
nomeTabela.textContent = "Nome Dinâmico Table";

//pegando a primeira TD
var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

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
        // paciente.style.color = "white";
        // paciente.style.backgroundColor = "red";
        // paciente.style.opacity = 0.5;
        paciente.classList.add("paciente-invalido"); //adiciona esta classe ao class no html referenciado no css
        tdImc.textContent = ("Não pode ser calculado!");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura fora da faixa");
        alturaEhValida = false;
        tdAltura.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido"); //adiciona esta classe ao class no html referenciado no css
        tdImc.textContent = ("Não pode ser calculado!");
    }

    //Calculando IMC com condicao de liberacao...
    if (pesoEhValido && alturaEhValida) {
        var imc = peso/(altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
   var botaoAdicionarUsuario = document.querySelector('#adicionar-paciente');
    botaoAdicionarUsuario.addEventListener("click", function() {
    console.log("Botao esta sendo clicado");
    });
