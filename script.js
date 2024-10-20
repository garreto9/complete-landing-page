// Inicialização do Swiper.js
// O Swiper.js é uma biblioteca para criar sliders/carrosséis. Aqui estamos configurando o slider da classe '.mySwiper'.
const swiper = new Swiper('.mySwiper', {
    navigation: { // Configuração de navegação com botões anterior e próximo
        nextEl: '.swiper-button-next', // Seletor para o botão "próximo"
        prevEl: '.swiper-button-prev', // Seletor para o botão "anterior"
    },
    pagination: { // Configuração da paginação para navegar entre os slides
        el: '.swiper-pagination', // Seletor do elemento de paginação
        clickable: true, // Permite clicar na paginação para mudar de slide
    },
    autoplay: { // Configuração de autoplay para o slider
        delay: 5000, // Tempo de espera entre as transições de slide (em milissegundos)
        disableOnInteraction: false, // Não desabilita autoplay após interação do usuário
    },
    loop: true, // Habilita o looping dos slides
});

// Inicialização do AOS.js (Animate On Scroll)
// A biblioteca AOS permite adicionar animações de rolagem aos elementos. Aqui, 'once: true' significa que a animação ocorrerá apenas uma vez.
AOS.init({ once: true });

// Mock de dados de serviços
// Criamos um array de objetos que representam os serviços oferecidos, com nome e descrição.
const mockData = [
    {
        name: "Cibersegurança", // Nome do serviço
        description: "Serviços especializados em proteger seus dados e sistemas contra ameaças digitais. Realizo auditorias de segurança, implementação de firewalls, detecção e resposta a incidentes, além de consultoria para a criação de políticas de segurança eficazes."
    },
    {
        name: "Desenvolvimento Full Stack", // Nome do serviço
        description: "Criação de sites e aplicações web robustas e eficientes, desde o design da interface do usuário até a funcionalidade do backend. Utilizo tecnologias modernas para garantir que seu projeto esteja sempre à frente no mercado."
    },
    {
        name: "Suporte Técnico", // Nome do serviço
        description: "Atendimento especializado para resolução de problemas técnicos, manutenção de sistemas e suporte ao usuário. Disponível para assistência remota e presencial, garantindo que seus sistemas funcionem perfeitamente o tempo todo."
    },
];

// Renderiza serviços no DOM
// Selecionamos o contêiner onde os serviços serão exibidos na página.
const servicesContainer = document.getElementById('services-container');
// Para cada serviço no mockData, criamos um card e o adicionamos ao contêiner.
mockData.forEach(service => {
    const serviceCard = document.createElement('div'); // Cria um novo elemento div para o card
    serviceCard.className = 'col-md-4'; // Define a classe para o card, permitindo que ele se ajuste em uma linha de 3 colunas
    // Adiciona o HTML do card
    serviceCard.innerHTML = ` 
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${service.name}</h5> <!-- Título do serviço -->
                <p class="card-text">${service.description}</p> <!-- Descrição do serviço -->
            </div>
        </div>`;
    servicesContainer.appendChild(serviceCard); // Adiciona o card ao contêiner de serviços
});

// Lista de comentários fictícios
// Criamos um array com comentários que simularão depoimentos de clientes.
const fakeComments = [
    "Serviço impecável, recomendo a todos!",
    "Atendimento excelente e profissionais muito capacitados.",
    "Minha empresa está mais segura do que nunca.",
    "A solução foi implementada de forma rápida e eficiente.",
    "Estou impressionado com a atenção aos detalhes!",
    "Voltarei a contratar sem dúvidas, foi uma ótima experiência."
];

// Função para selecionar um comentário aleatório
// Esta função escolhe um comentário aleatório da lista de comentários fictícios.
function getRandomComment() {
    const randomIndex = Math.floor(Math.random() * fakeComments.length); // Gera um índice aleatório
    return fakeComments[randomIndex]; // Retorna o comentário correspondente ao índice gerado
}

// Função para buscar testemunhos usando a API RandomUser
// Esta função busca 4 usuários aleatórios para usar como testemunhos.
async function fetchTestimonials() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=4'); // Realiza a chamada à API
        if (!response.ok) throw new Error('Erro ao buscar testemunhos.'); // Lança um erro se a resposta não for OK

        const data = await response.json(); // Converte a resposta para JSON
        populateTestimonials(data.results); // Chama a função para popular os testemunhos na página
    } catch (error) {
        console.error('Erro ao buscar testemunhos:', error); // Loga o erro no console
        displayError('Erro ao carregar os testemunhos. Tente novamente mais tarde.'); // Exibe uma mensagem de erro para o usuário
    }
}

// Função para popular os depoimentos no container
// Esta função recebe os testemunhos e os adiciona ao contêiner na página.
function populateTestimonials(testimonials) {
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.innerHTML = ''; // Limpa o conteúdo anterior do contêiner

    testimonials.forEach((testimonial, index) => {
        const fullName = `${testimonial.name.first} ${testimonial.name.last}`; // Cria o nome completo do usuário
        const picture = testimonial.picture.large; // Obtém a imagem do usuário
        const randomComment = getRandomComment(); // Obtém um comentário aleatório

        const testimonialCard = document.createElement('div'); // Cria um novo elemento div para o card de depoimento
        testimonialCard.className = 'col-md-6'; // Define a classe para o card
        testimonialCard.setAttribute('data-aos', 'fade-up'); // Adiciona atributo para animação AOS
        testimonialCard.setAttribute('data-aos-delay', `${index * 100}`); // Define um atraso para a animação com base no índice

        // Adiciona o HTML do card de depoimento
        testimonialCard.innerHTML = `
            <div class="card">
                <img src="${picture}" class="card-img-top" alt="${fullName}"> <!-- Imagem do usuário -->
                <div class="card-body">
                    <blockquote class="blockquote">
                        <p>"${randomComment}"</p> <!-- Comentário aleatório -->
                        <footer class="blockquote-footer">${fullName}</footer> <!-- Nome do usuário -->
                    </blockquote>
                </div>
            </div>`;

        testimonialContainer.appendChild(testimonialCard); // Adiciona o card ao contêiner de testemunhos
    });
}

// Chama a função de fetch ao carregar a página
fetchTestimonials(); // Inicia a busca pelos testemunhos quando a página é carregada

// Função para exibir mensagens de erro
// Esta função exibe uma mensagem de erro na tela quando necessário.
function displayError(message) {
    const errorContainer = document.getElementById('error-container');
    errorContainer.textContent = message; // Define o texto da mensagem de erro
    errorContainer.style.display = 'block'; // Exibe o contêiner de erro
}

// Validação e envio do formulário via EmailJS
// Inicializa o EmailJS com o seu ID de usuário
emailjs.init('oGIFyusU81YFFpSsN');

// Adiciona um ouvinte de evento para o formulário de contato
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Previne o comportamento padrão do envio do formulário

    // Captura os valores dos campos do formulário
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorContainer = document.getElementById('error-container');
    errorContainer.style.display = 'none'; // Limpa mensagens de erro anteriores

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!name || !email || !phone || !message) {
        displayError('Por favor, preencha todos os campos obrigatórios.'); // Exibe erro se campos estão vazios
        return;
    }

    // Validação do e-mail
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Expressão regular para validar o e-mail
    if (!email.match(emailPattern)) {
        displayError('Por favor, insira um endereço de e-mail válido.'); // Exibe erro se e-mail não é válido
        return;
    }

    // Envia o formulário usando EmailJS
    emailjs.send("DevCyber", "template_DevCyber", {
        name, email, phone, message // Envia os dados do formulário
    })
    .then(response => {
        console.log('SUCCESS!', response.status, response.text); // Loga a resposta de sucesso
        alert('Mensagem enviada com sucesso!'); // Exibe uma mensagem de sucesso ao usuário
        document.getElementById('contactForm').reset(); // Limpa o formulário após o envio
    })
    .catch(err => {
        console.error('FAILED...', err); // Loga o erro em caso de falha
        displayError('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.'); // Exibe erro ao usuário
    });
});


