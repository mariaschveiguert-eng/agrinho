// Dados do Quiz interativo do Agrinho 2026
const dadosQuiz = {
    pergunta: "Qual das alternativas reflete melhor a união entre 'Agro Forte' e 'Futuro Sustentável'?",
    alternativas: [
        { texto: "Focar apenas em aumentar a área plantada, sem se preocupar com matas ciliares.", correta: false },
        { texto: "Utilizar tecnologias como drones e análise de solo para produzir mais gastando menos recursos naturais.", correta: true },
        { texto: "Abandonar o uso de tecnologia e produzir apenas de forma manual como antigamente.", correta: false },
        { texto: "Priorizar o lucro imediato sem pensar na renovação de nutrientes do solo.", correta: false }
    ]
};

// Elementos do HTML capturados pelo JS
const campoPergunta = document.getElementById('pergunta');
const campoAlternativas = document.getElementById('alternativas');
const campoResultado = document.getElementById('resultado');

// Função para iniciar e carregar o mini-quiz
function carregarQuiz() {
    campoPergunta.innerText = dadosQuiz.pergunta;
    campoAlternativas.innerHTML = ""; // Limpa o container antes de colocar os botões
    campoResultado.innerText = "";

    dadosQuiz.alternativas.forEach(alternativa => {
        const botao = document.createElement('button');
        botao.innerText = alternativa.texto;
        botao.classList.add('quiz-btn');
        
        // Configura o evento de clique para validar a resposta
        botao.addEventListener('click', () => checarResposta(alternativa.correta));
        campoAlternativas.appendChild(botao);
    });
}

// Função executada ao clicar em uma alternativa
function checarResposta(eCorreta) {
    if (eCorreta) {
        campoResultado.style.color = "#2d6a4f";
        campoResultado.innerText = "🎉 Correto! O equilíbrio real acontece aliando alta tecnologia e preservação.";
    } else {
        campoResultado.style.color = "#9b2226";
        campoResultado.innerText = "❌ Tente novamente! Lembre-se de buscar a harmonia entre alta produção e cuidado ambiental.";
    }
}

// Inicializa o quiz ao carregar a página
document.addEventListener('DOMContentLoaded', carregarQuiz);
