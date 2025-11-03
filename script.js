// =======================================================
// 1. FUNÇÃO PRINCIPAL PARA O SISTEMA DE ABAS (PARK-INFO)
// =======================================================
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Esconder todos os conteúdos das abas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remover a classe 'active' de todos os botões das abas
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar o conteúdo da aba atual e adicionar a classe 'active' ao botão
    var contentElement = document.getElementById(tabName);
    if (contentElement) {
        contentElement.style.display = "block";
    }
    
    if (evt && evt.currentTarget) {
        evt.currentTarget.className += " active";
    }
}


// =======================================================
// 2. FUNÇÕES DE INTERAÇÃO DOS CARDS E BOTÕES
// =======================================================
document.addEventListener("DOMContentLoaded", function() {
    
    // Inicializa a primeira aba ('Dinos')
    var firstTabContent = document.getElementById('Dinos');
    if (firstTabContent) {
        firstTabContent.style.display = "block";
    }
    
    // 2.1. Funcionalidade para os BOTÕES DE DETALHES DE DINOS
    document.querySelectorAll('.btn-dino-details').forEach(button => {
        button.addEventListener('click', function() {
            const dinoName = this.getAttribute('data-dino');
            
            let message = '';
            if (dinoName === 'T-Rex') {
                message = "Tyrannosaurus Rex:\n\n- Classificação: Categoria 5 (Contenção Máxima)\n- Dieta: Carnívoro obrigatório\n- Aviso: O T-Rex tem visão baseada em movimento. Fique absolutamente parado.";
            } else if (dinoName === 'Raptor') {
                message = "Velociraptor:\n\n- Classificação: Categoria 4 (Perigoso)\n- Social: Caça em bando e demonstra alta inteligência.\n- Aviso: Não subestime a cerca. Eles aprendem rápido.";
            } else if (dinoName === 'Triceratops') {
                message = "Triceratops:\n\n- Classificação: Categoria 2 (Manejo padrão)\n- Dieta: Herbívoro\n- Localização: Visto com mais frequência no Campo Leste. É dócil, mas pode ser defensivo.";
            } 

            alert(`FICHA TÉCNICA - ${dinoName}\n\n${message}`);
        });
    });

    // 2.2. Funcionalidade para os BOTÕES DE DETALHES DAS ATRAÇÕES
    document.querySelectorAll('.btn-attraction-details').forEach(button => {
        button.addEventListener('click', function() {
            const attractionName = this.getAttribute('data-attraction');
            const action = this.textContent;

            let message = '';
            if (attractionName === 'Jeep Tour') {
                message = "Agendamento de Tour: Verifique a disponibilidade de vagas e reserve o seu horário no próximo passo. Tempo de espera: 5 min.";
            } else if (attractionName === 'Giroscópio') {
                message = "Restrições do Giroscópio:\n\n- Altura mínima: 1.20m\n- Proibido para gestantes e pessoas com problemas cardíacos.\n- Capacidade: 4 pessoas por esfera.";
            } else if (attractionName === 'Laboratório') {
                message = "Informações do Laboratório:\n\n- Acesso somente com agendamento prévio.\n- Horários de nascimento: 11h e 15h (sujeito a alterações).\n- Não toque nos ovos.";
            } 

            alert(`AÇÃO: ${action} em ${attractionName}\n\n${message}`);
        });
    });
    
    // 2.3. Funcionalidade para os BOTÕES DE SERVIÇOS (NOVO)
    document.querySelectorAll('.btn-service-details').forEach(button => {
        button.addEventListener('click', function() {
            const serviceName = this.getAttribute('data-service');
            const action = this.textContent;
            
            let message = '';
            if (serviceName === 'Paddock Grill') {
                message = "Cardápio do Paddock Grill: Confira nossos pratos especiais do dia, incluindo o famoso 'Bronto Burger' e opções vegetarianas.";
            } else if (serviceName === 'Loja') {
                message = "Localização da Loja: A Loja de Souvenirs InGen está localizada ao lado do Centro de Visitantes. Horário de funcionamento: 9h às 20h.";
            } else if (serviceName === 'Primeira Ajuda') {
                message = "Ligar para Segurança: Você está simulando uma chamada de emergência. A segurança será notificada e enviará uma equipe de apoio médico imediatamente.";
            } else if (serviceName === 'Mapa') {
                message = "Baixar Mapa: O download do mapa oficial em PDF está começando. Use-o offline durante sua visita ao parque.";
            }
            
            alert(`AÇÃO: ${action} para ${serviceName}\n\n${message}`);
        });
    });
    
    // 2.4. Funcionalidade para os LINKS DE PROMOÇÃO
    document.querySelectorAll('.promotions-section .btn-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const actionText = this.textContent;
            const parentCard = this.closest('.card');
            const promoTitle = parentCard.querySelector('h3').textContent;

            alert(`Ação: ${actionText} para "${promoTitle}"\n\nVocê seria redirecionado para a página de detalhes da promoção para efetivar a compra ou o resgate.`);
        });
    });
});


// =======================================================
// 3. FUNÇÃO PARA SIMULAR A COMPRA (CTA PRINCIPAL)
// =======================================================
function simularCompra() {
    const data = document.getElementById('data-visita').value;
    const tipoIngresso = document.querySelector('input[name="tipo-ingresso"]:checked').value;
    const quantidade = document.getElementById('quantidade').value;

    if (!data || quantidade < 1) {
        alert("Por favor, preencha uma data válida e a quantidade de ingressos.");
        return;
    }

    let mensagem = `✅ PEDIDO SIMULADO - Próxima Etapa: Checkout!\n\n`;
    mensagem += `Data: ${data}\n`;
    mensagem += `Ingresso: ${tipoIngresso}\n`;
    mensagem += `Pessoas: ${quantidade}\n\n`;

    alert(mensagem);
}