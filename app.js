const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3200;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

// Configuração do handlebars
app.engine('hbs', exphbs.engine());
app.set('view engine', 'hbs');

// Mostra a página para cadastro de cursos
app.get('/', (req, res) => {
    res.render('post', { layout: false });
})

// Mostra a página com a lista de todos os cursos cadastrados
app.get('/cursos', (req, res) => {
    const sql = `SELECT * FROM curso`;

    conn.query(sql, (err, data) => {
        if(err){
            console.log(err);
        }
        const listar = data;
        res.render('getCursos', {layout: false, listar});
    })
})

// Mostra os dados de um curso específico
app.get('/cursos/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM curso WHERE id = ${id}`;

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err);
        }
        const listar = data[0];
        res.render('getCursosId', {layout: false, listar} );
    })
})

// Mostra os dados de um curso específico para renderizar nos values dos input para editar os dados
app.get('/cursos/edit/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM curso WHERE id = ${id}`;

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err);
        }
        const infos = data[0];
        res.render('updateCurso', {layout: false, infos})
    })
})

// Cadastra um curso no database
app.post('/cadastrar', (req, res) => {
    const nome = req.body.nome;
    const modulos = req.body.modulos;
    const turmas = req.body.turmas;
    const cargaHoraria = req.body.cargaHoraria;
    const descricao = req.body.descricao;
    const sql = `INSERT INTO curso(nome, modulos, qtd_de_turmas, carga_horaria, descricao) VALUES('${nome}', ${modulos}, ${turmas}, '${cargaHoraria}', '${descricao}')`;

    conn.query(sql, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/');
    })
})

// Atualiza os dados de um curso
app.post('/updatecurso', (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const modulos = req.body.modulos;
    const turmas = req.body.turmas;
    const cargaHoraria = req.body.cargaHoraria;
    const descricao = req.body.descricao;
    const sql = `UPDATE curso SET nome = '${nome}', modulos = ${modulos}, qtd_de_turmas = ${turmas}, carga_horaria = '${cargaHoraria}', descricao = '${descricao}' WHERE id = ${id}`;

    conn.query(sql, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/cursos');
    })
})

// Remove um curso do database
app.get('/remove/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM curso WHERE id = ${id}`;

    conn.query(sql, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/cursos');
    })
})

// Busca um curso através do seu id
app.get('/buscar', (req, res) => {
    res.render('buscar', {layout: false});
})
app.post('/buscar/', (req, res) => {
    const id = req.body.id;
    const sql = `SELECT * FROM curso WHERE id = ${id}`;

    conn.query(sql, (err, data) => {
        if(err){
            console.log(err);
        }
        const listar = data[0];
        res.render('getCursosId', {layout: false, listar});
    })
})

// Cria a conexão com o database
const conn = mysql.createConnection({
    host: '127.0.0.1',
    database: 'crud_api',
    port: '3307',
    password: '',
    user: 'root'
})

// Cria uma porta para o servidor
app.listen(port, (err) => {
    if(err){
        console.log(err);
    }
    console.log(`Servidor conectado na porta ${port}`);
})