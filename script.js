const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em que ano foi fundado o clube de regatas do Flamengo?",
        alternativas: [
            {
                texto: "1895",
                afirmacao: "o flamengo foi fundado em 1895.",
            },
            {
                texto: "1905",
                afirmacao: "o flamengo foi fundado em 1895.",
            }
        ]
    },
    {
        enunciado: "Quem é o maior ídolo da história do Flamengo?",
        alternativas: [
            {
                texto: "Gabigol",
                afirmacao: "Zico é o maior ídolo do Flamengo.",
            },
            {
                texto: "Zico",
                afirmacao: "Zico é o maior ídolo do Flamengo.",
            }
        ]
    },
    {
        enunciado: "Em que ano o Flamengo ganhou o seu primeiro brasileirão?",
        alternativas: [
            {
                texto: "1982",
                afirmacao: "O Flamengo ganhou seu primeiro brasileirão em 1980."
            },
            {
                texto: "1980",
                afirmacao: "O Flamengo ganhou seu primeiro brasileirão em 1980."
            }
        ]
    },
    {
        enunciado: "Quem foi o técnico na conquista do mundial de 1981?",
        alternativas: [
            {
                texto: "paulo cezar carpegiani",
                afirmacao: "Quem conquistou o mundial de 81 foi carpegiani."
            },
            {
                texto: "Jair Pereira",
                afirmacao: "Quem conquistou o mundial de 81 foi carpegiani."
            }
        ]
    },
    {
        enunciado: "Quem marcou o gol que decidiu o campeonato brasileiro de 2009?",
        alternativas: [
            {
                texto: "Adriano Imperador",
                afirmacao: "Quem marcou o gol que decidiu o campeonato de 2009 foi Ronaldo Angelim. E, é isso, Espero que tenha se divertido."
            },
            {
                texto: "Ronaldo Angelim",
                afirmacao: "Quem marcou o gol que decidiu o campeonato de 2009 foi Ronaldo Angelim. E, é isso, Espero que tenha se divertido."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "As respostas certas eram:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();