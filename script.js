// DEFINE A DATA E HORA INICIAL AQUI
// Lembre-se: Ano, Mês (0=Jan, 1=Fev, ..., 5=Jun, 6=Jul), Dia, Hora, Minuto
// Exemplo abaixo para 29 de Junho de 2026, às 12:15
const startDate = new Date(2026, 5, 29, 12, 15, 0);

function updateCounter() {
    const now = new Date();
    const diff = now - startDate; // Diferença em milissegundos

    // Cálculos matemáticos simples para converter a diferença
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Atualiza os elementos no HTML com os valores calculados
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// Atualiza o contador a cada 1 segundo (1000ms)
setInterval(updateCounter, 1000);

// Chama a função uma vez imediatamente para não começar zerado
updateCounter();

// --- Função de Celebração (Chuva de Corações) ---
function celebrate() {
    // Cria 50 corações ao mesmo tempo
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
}

function createHeart() {
    // Cria um novo elemento 'div'
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Sorteia um dos emojis para usar
    const hearts = ['💙', '💜', '❤️', '💖', '✨'];
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

    // Sorteia a posição horizontal inicial
    heart.style.left = Math.random() * 100 + 'vw';

    // Sorteia a duração da animação (tempo que leva para cair)
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';

    // Sorteia o tamanho do coração
    heart.style.fontSize = Math.random() * 10 + 15 + 'px';

    // Adiciona o coração ao corpo do site
    document.body.appendChild(heart);

    // Remove o coração da memória depois que a animação termina (5 segundos)
    setTimeout(() => {
        heart.remove();
    }, 5000);
}