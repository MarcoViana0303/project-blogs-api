<h4 align="center">
  Blogs API
  <br /><br />
  <img alt="CRUD" src="./crud.png" />
  <br /><br />
</h4>

- Neste projeto, desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog!
  
- A aplicação foi desenvolvida em Node.js usando o pacote sequelize para fazer um CRUD de posts;
  
- Meu objetivo foi criar endpoints que estarão conectados ao banco de dados seguindo os princípios do REST;
  
- Para fazer um post é necessário usuário e login, portanto foi trabalhada a relação entre user e post;
  
- Foi necessária a utilização de categorias para os posts, trabalhando, assim, a relação de posts para categories e de categories para posts.

<hr />

<details>
  <summary><strong>:rocket: Tecnologias usadas</strong></summary>
  <br />
  
-  MySQL
-  Express
-  Sequelize
-  Docker
-  ESLint
-  Git
-  VS Code
  
  </details>
  
  <br />

  Para rodar a aplicação, irá precisar de: [Git](https://git-scm.com), [VS Code](https://code.visualstudio.com/), [Node.js](https://nodejs.org/) e [NPM](https://www.npmjs.com/).

<br />

Clone o projeto

```bash
  git clone git@github.com:MarcoViana0303/project-blogs-api.git
```

Entre no diretório do projeto

```bash
  cd project-blogs-api
```

<br /> 

## Instalando Dependências
### Com Docker
> Backend

* Suba os containeres: 
```bash
docker-compose up -d
``` 

* Em seguida abra o terminal interativo do container: 
```bash
docker exec -it blogs_api bash
``` 

* Instale as dependências dentro do container: 
```bash
npm install
```
> Para rodar a API 

* Rode o seguinte comando dentro do container: 
```bash
npm run debug
```
> Testes

* Dentro do terminal do container:
```bash
npm test
``` 

### Sem Docker

* Instale as dependências [Caso existam]
```bash
npm install
``` 

* Execute a aplicação com 
```bash
npm start
```

Ou: 

```bash
npm run debug
```

> Testes

* Rode o comando:
```bash
npm test
```

## Diagrama de Entidade-Relacionamento utilizado para o projeto
![DER](./der.png)


## Feedback

Encontrou algum erro ou está com alguma dúvida? Não deixe de entrar em contato comigo!


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marco-viana2022/)
[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](https://marcoviana.dev@gmail.com/)
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://marcoviana-dev.vercel.app/)
