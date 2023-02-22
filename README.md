<h1 align="center">Projeto CRUD API</h1>

<div>
  <p>Esse projeto tem como finalidade desenvolver propostas de APIs que serão o produto mínimo viável de um aplicativo. <br>O tema escolhido pelo Squad foi <kbd>Educação</kbd>. As entidades presentes no banco de dados foram criadas tendo em mente sua importância em uma instituição de ensino.</p>
  <p><strong>As entidades são:</strong></p>
  <ul>
    <li>Curso</li>
    <li>Turma</li>
    <li>Professor</li>
    <li>Aluno</li>
    <li>Matéria</li>
  </ul>
</div>

<h2>⚙️ Funcionalidades</h2>

<p>É possível utilizar os métodos de requisição <kbd>GET</kbd>, <kbd>POST</kbd>, <kbd>PUT</kbd> e <kbd>DELETE</kbd> em todas as rotas da API. Para acessar uma das rotas, basta iniciar o servidor e inserir no URL - após a declaração da porta - uma das opções abaixo: <kbd>/cursos</kbd>, <kbd>/professor</kbd>, <kbd>/aluno</kbd>, <kbd>/materia</kbd> e <kbd>/turmas</kbd>.</p>

<h2>🚀 Execução do Projeto</h2>

<p>Utilize o CMD para efetuar todo o processo de inicialização.</p>

* Faça o clone do projeto com o comando abaixo:

```cmd
git clone https://github.com/LucasLopesPrograms/Projeto-em-Grupo-M5---CRUD
```
* Abra a pasta do clone e instale as dependências do projeto com o comando:

```cmd
# Abrir pasta do clone 
cd Projeto-em-Grupo-M5---CRUD

# Instalar as dependências do projeto
npm install
```
* Importe o arquivo do banco de dados - <kbd>crud_api.sql</kbd> - para um SGBD (<em>Sistema de Gerenciamento de Banco de Dados</em>), como o <strong>MySQL Workbench</strong> ou pelo phpMyAdmin do <strong>XAMPP</strong>. OBS.: Se atente a porta de conexão com o banco de dados. A porta configurada é a 3306.

* Inicie o servidor com o comando:

```cmd
npm start
```
* Teste os métodos da API através do localhost do servidor + alguma das rotas ou utilize ferramentas para realizar testes em APIs, como o <strong>Insomnia</strong>.

<h2>🛠 Tecnologias</h2>

<p>Para o desenvolvimento do projeto, foi utilizado as seguintes tecnologias: </p>

- [x] Node
- [x] Express
- [x] MySql
- [x] Nodemon 
- [x] Express-handlebars

<h2>🤝 Squad</h2>

<table>
  <tr>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/113109526/220770102-5a220dc5-a888-4778-9d56-8b48685cf5e2.jpg" width="140" height="180"/> <br>
      <a href="https://github.com/Juevan">Antonio Juevan</a>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/113109526/220772593-a6e96d35-17e4-4e07-8ba4-a3ad18c1bb5f.jpg" width="170" height="170"/> <br>
      <a href="https://github.com/ZoeDoceAmarga">Sara Ayram</a>
    </td>
     <td align="center">
      <img src="https://user-images.githubusercontent.com/113109526/220770783-12a55c5e-b502-4ee9-8643-34050561abc0.jpg" width="170" height="170"/> <br>
      <a href="https://github.com/LucasLopesPrograms">Lucas Lopes da Silva</a>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/113109526/220765118-765ce30b-6357-4566-b902-5bfad316e485.jpg" width="150" height="170"/> <br>
      <a href="https://github.com/VihProgramer">Vitória Tavares</a>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/113109526/220762223-98408eb1-936c-4968-843e-9da516b3dd52.jpg" width="170" height="170"/> <br>
      <a href="https://github.com/DiegoBernardes95">Diego Bernardes</a>
    </td>
  </tr>
</table>

