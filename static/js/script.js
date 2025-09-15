// Criar efeito de partículas
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posição aleatória
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Tamanho aleatório
        const size = Math.random() * 10 + 7;
        
        // Definir estilos da partícula
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Animação
        particle.style.animation = `moveParticle ${Math.random() * 20 + 10}s infinite ease-in-out`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Adicionar keyframes para animação de partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes moveParticle {
            0% {
                transform: translate(0, 0);
                opacity: 0.5;
            }
            25% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                opacity: 0.8;
            }
            50% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                opacity: 0.3;
            }
            75% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                opacity: 0.6;
            }
            100% {
                transform: translate(0, 0);
                opacity: 0.5;
            }
        }
    `;
    document.head.appendChild(style);
});

// Navegação entre páginas
function showPage(pageId) {
    // Oculta todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });
    
    // Mostra a página solicitada
    document.getElementById(pageId).classList.add('active-page');
    
    // Scroll para o topo
    window.scrollTo(0, 0);
}

// Selecionar ano do boletim
function selectYear(year) {
    // Remove a classe active de todos os botões
    document.querySelectorAll('.year-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Adiciona a classe active ao botão clicado
    event.target.classList.add('active');
    
    // Aqui você faria a requisição para carregar os dados do ano selecionado
    console.log(`Carregando boletim do ano: ${year}`);
    
    // Atualiza o título da tabela
    document.querySelector('#grades h4').textContent = `Boletim - ${year}`;
}


