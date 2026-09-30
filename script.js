// Função auxiliar para pegar o input que está selecionado na tela
function getCampoAtivo() {
    const selecionado = document.querySelector('input[name="campoAtivo"]:checked').value;
    return document.getElementById(selecionado);
}

// Função auxiliar para converter o texto da tela (com vírgula) em número real
function obterValor(idCampo) {
    let valorTexto = document.getElementById(idCampo).value;
    // Substitui a vírgula por ponto para o JavaScript conseguir calcular
    valorTexto = valorTexto.replace(',', '.');
    return parseFloat(valorTexto) || 0;
}

// --- OPERAÇÕES BÁSICAS ---
function somar() {
    let n1 = obterValor('numero1');
    let n2 = obterValor('numero2');
    exibirResultado(n1 + n2);
}

function subtrair() {
    let n1 = obterValor('numero1');
    let n2 = obterValor('numero2');
    exibirResultado(n1 - n2);
}

function multiplicar() {
    let n1 = obterValor('numero1');
    let n2 = obterValor('numero2');
    exibirResultado(n1 * n2);
}

function dividir() {
    let n1 = obterValor('numero1');
    let n2 = obterValor('numero2');
    if (n2 === 0) {
        document.getElementById('resultado').innerText = "Resultado: Erro (Divisão por 0)";
        return;
    }
    exibirResultado(n1 / n2);
}

function exibirResultado(valor) {
    // Exibe o resultado de volta para o usuário usando o formato de vírgula
    document.getElementById('resultado').innerText = "Resultado: " + valor.toString().replace('.', ',');
}

// --- NOVAS FUNÇÕES (VERSÃO 3.0.0) ---

// CE: Limpa apenas o campo que está selecionado
function limparEntrada() {
    let campo = getCampoAtivo();
    campo.value = "0";
}

// %: Divide o valor do campo selecionado por 100
function porcentagem() {
    let campo = getCampoAtivo();
    let valorAtual = obterValor(campo.id);
    let resultadoPorcentagem = valorAtual / 100;
    campo.value = resultadoPorcentagem.toString().replace('.', ',');
}

// Vírgula: Adiciona a vírgula se ela ainda não existir no campo
function adicionarVirgula() {
    let campo = getCampoAtivo();
    // Se o campo estiver zerado, vira "0,"
    if (campo.value === "0" || campo.value === "") {
        campo.value = "0,";
    } else if (!campo.value.includes(',')) {
        campo.value += ",";
    }
}
