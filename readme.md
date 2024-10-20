
# WolfCyberStack

## Visão Geral
O WolfCyberStack é um site especializado em Segurança da Informação e Cibersegurança. Este projeto inclui seções para serviços oferecidos, depoimentos de clientes e um formulário de contato.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página.
- **CSS3**: Estilização da página com foco em design responsivo.
- **JavaScript**: Para funcionalidades interativas.
- **Bootstrap**: Framework CSS para um design responsivo e moderno.
- **Swiper.js**: Biblioteca para sliders/carrosséis.
- **AOS.js**: Biblioteca para animações de rolagem.

## Funcionalidades

- **Cabeçalho e Navegação**: Um cabeçalho fixo que contém o nome do site e links para seções importantes.
- **Slider de Imagens**: Um carrossel de imagens na seção principal do site.
- **Seções**: Informações sobre o profissional, serviços oferecidos, depoimentos de clientes e um formulário de contato.
- **Rodapé**: Links para redes sociais e informações adicionais.

## Como Visualizar o Projeto Localmente
Para visualizar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/garreto9/complete-landing-page.git
   ```
2. **Navegue até o diretório do projeto:**
   ```bash
   cd complete-landing-page
   ```
3. **Abra o arquivo `index.html` em um navegador web:**
   ```bash
   open index.html  # Para usuários de Mac
   start index.html # Para usuários de Windows
   xdg-open index.html # Para usuários de Linux
   ```

## APIs Utilizadas
- **Random User API:** Utilizada para gerar usuários aleatórios e suas imagens para os depoimentos. A chamada da API é feita através do seguinte endpoint:
  ```
  https://randomuser.me/api/?results=4
  ```
- **EmailJS:** Utilizada para enviar formulários de contato. É necessário configurar um ID de usuário do EmailJS para o funcionamento do envio.

## Bibliotecas Externas
1. **Swiper.js:** Uma biblioteca de carrosséis que permite criar sliders responsivos e personalizáveis. Utilizada para a seção de serviços.
   - Configurações principais:
     - Navegação com botões anterior e próximo.
     - Paginação clicável.
     - Autoplay com delay de 5000ms.
     - Loop habilitado.
  
2. **AOS.js (Animate On Scroll):** Biblioteca que permite adicionar animações quando os elementos entram na viewport durante o scroll. Configurada para executar animações uma única vez.
 
3. **EmailJS:** Utilizada para o envio de formulários sem a necessidade de configurar um servidor.

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais informações.
