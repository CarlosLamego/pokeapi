O presente projeto foi feito com muito esforço (realmente foi) e espero que consigam aproveitar.

1. Após o ### `npm start` a página apresentará 10 pokemons, conforme solicitado na quest.
2. No footer da página há o botão `mostrar mais 10 pokemons`, que como o nome diz, apresenta mais dez pokemons e atualiza o total de páginas/pokemon listado.
3. Todos os pokemons são clicáveis, quando clicado, abre nova página com os 5 detalhes pedidos: Imagem, nome, movimentos, habilidades e tipo.
4. Na home, junto a Navbar há o botão para mudança de tema entre claro e escuro, se preferirem, as cores podem ser alteradas no theme-context.js.
5. Conforme solicitado, tentei utilizar tudo passado no teste técnico: 
     - A aplicação deverá ser Single Page Application (SPA);
     - Utilizar React.js para o desenvolvimento da aplicação;
     - Utilizar Context API para criação do Theme Toggler 
     - (Alternador entre tema claro e escuro);
     - Utilizar styled-components para estilização dos componentes;
     - Utilizar react-router-dom para a navegação entre as páginas;
6. Criação do README.md
7. Descrição das funcionalidades, conforme já feito.
8. Ferramentas utilizadas: 
    - Re-assisti aulas de react algumas vezes para recapitular informaçãoes;
    - Chat GPT para dúvidas pontuais;
    - Vídeos no youtube, principalmente para os passos iniciais e não ultrapassar pontos bases antes da hora;
    - Meus sonhos 😴 - ótimas ideias vinham nestes momentos
9. Fiz o projeto na seguinte ordem:
    - Anotei dados conforme esperava;
    - Dentro do App anotei as etapas que deveria fazer e montar;
    - Montei primeiro a estrutura onde iria encaixar o que procurava;
    - Navbar;
    - Api.js;
    - Pokemon.js importando os dados da Api;
    - Pokedex.js recebendo dados de Pokemon.js;
    - Searchbar, talvez junto com pokedex, aproveitando os dados da Api;
    - No App.js, limitei o que quero que apareça na tela e fiz o math.ceil para o número de páginas da Pagination.js;
    - Criação do Expand;
    - Muita luta para funcionar os botões de return, inclusive no logo principal;
    - Muita luta para funcionar a mudança de tema.
    - README.md
10. Entre na pasta e `npm start` no terminal


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
