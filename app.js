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

// >>>>>>>>>>>>CRUD CURSO<<<<<<<<<<<<<<<< 

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
    const sql = `INSERT INTO curso(nome, modulos, turmas, cargaHoraria, descricao) VALUES('${nome}', ${modulos}, ${turmas}, '${cargaHoraria}', '${descricao}')`;

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
    const sql = `UPDATE curso SET nome = '${nome}', modulos = ${modulos}, turmas = ${turmas}, cargaHoraria = '${cargaHoraria}', descricao = '${descricao}' WHERE id = ${id}`;

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

// >>>>>>>>>>>>CRUD PROFESSORES<<<<<<<<<<<<<<<< 

// Mostra a página para cadastro de professores
app.get('/professor', (req, res) => {
    res.render('postProf', { layout: false });
});

// Mostra a página com a lista de todos os professores cadastrados
app.get('/professores', (req, res) => {
    const sql = `SELECT * FROM professor`;

    conn.query(sql, (err, data) => {
        if(err){
            console.log(err);
        }
        const listarProf = data;
        res.render('getProfessor', {layout: false, listarProf});
        //getProfessor <<handlebars
    })
});

// Mostra os dados de um professor específico
app.get('/professor/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM professor WHERE id = ${id}`;

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err);
        }
        const listar = data[0];
        res.render('getProfID', {layout: false, listar} ); //getProfessorID <<handlebars
    })
})

// Mostra os dados de um professor específico para renderizar nos values dos input para editar os dados
app.get('/professor/edit/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM professor WHERE id = ${id}`;

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err);
        }
        const infos = data[0];
        res.render('updateProf', {layout: false, infos}) //updateProf<<handlebars
    })
});


// Cadastra um Professor no database
app.post('/cadastrarProf', (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const matricula = req.body.matricula;
    const telefone = req.body.telefone ;
    const endereco = req.body.endereco;
    const sql = `INSERT INTO professor(nome, matricula, telefone, endereco) VALUES('${nome}', '${ matricula}', '${telefone}', '${endereco}')`;

    conn.query(sql, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/professores');
    })
});
// Atualiza os dados de um professor
app.post('/updateprofessor', (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const matricula = req.body. matricula;
    const telefone = req.body.telefone ;
    const endereco = req.body.endereco;
    const sql = `UPDATE professor SET nome = '${nome}', matricula = ${matricula}, telefone = '${telefone}', endereco = '${endereco}' WHERE id = ${id}`;

   

    conn.query(sql, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/professor');
    })
});

// Remove um professor do database
app.get('/removeprofessor/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM professor WHERE id = ${id}`;

    conn.query(sql, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/professores');
    })
});

// >>>>>>>>>>>>CRUD ALUNO<<<<<<<<<<<<<<<< 

// Rota da pagina Cadastro de alunos
app.get('/cadaluno', (req, res) => {
    res.render('postAluno', { layout: false} );
});

// Cadastrar alunos
app.post('/cdalnpost', (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const turma = req.body.turma;
    const media = req.body.media;
    const telefone = req.body.telefone;
    const sql = `INSERT INTO aluno (nome, turma, media, telefone) VALUES ('${nome}', '${turma}', '${media}','${telefone}')`;

    conn.query(sql, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/cadaluno');
    })
});

//ver lista de alunos
app.get('/aluno', (req, res) => {
    const sql = `SELECT * FROM aluno`;

    conn.query(sql, (err, data) => {
        if(err){
            console.log(err);
        }
        const listarAlunos = data;
        res.render('getAluno', {layout: false, listarAlunos});
    })
});

// Mostra os dados de um aluno específico
app.get('/alunos/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM aluno WHERE id = ${id}`;

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err);
        }
        const listar = data[0];
        res.render('getAlunosID', {layout: false, listar} );
    })
});


// Mostra os dados de um aluno específico para renderizar nos values dos input para editar os dados
app.get('/alunos/edit/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM aluno WHERE id = ${id}`;

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err);
        }
        const infos = data[0];
        res.render('updateAluno', {layout: false, infos})
    })
});

// Atualiza os dados de um aluno
app.post('/updatealuno', (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const turma = req.body.turma;
    const media = req.body.media
    const telefone = req.body.telefone;
    const sql = `UPDATE aluno SET nome = '${nome}', turma = ${turma}, media = '${media}', telefone = '${telefone}' WHERE id = ${id}`;

   

    conn.query(sql, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/aluno');
    })
});

// Remove um aluno do database
app.get('/removeralunos/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM aluno WHERE id = ${id}`;

    conn.query(sql, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/aluno');
    })
});

// >>>>>>>>>>>>CRUD MATÉRIA<<<<<<<<<<<<<<<< 

// Rota da pagina Cadastro de materias
app.get('/cadmateria', (req, res) => {
    res.render('postMateria', { layout: false} );
});

// Cadastrar materias
app.post('/cadmatpost', (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const cargaHoraria = req.body.cargaHoraria;
    const tempos = req.body.tempos;
    const sql = `INSERT INTO materia (nome, cargaHoraria, tempos) VALUES ('${nome}', '${cargaHoraria}', '${tempos}')`;

    conn.query(sql, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/cadmateria');
    })
});

//ver lista de materias
app.get('/materia', (req, res) => {
    const sql = `SELECT * FROM materia`;

    conn.query(sql, (err, data) => {
        if(err){
            console.log(err);
        }
        const listarMaterias = data;
        res.render('getMateria', {layout: false, listarMaterias});
    })
});

// Mostra os dados de um aluno específico
app.get('/materia/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM materia WHERE id = ${id}`;

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err);
        }
        const listar = data[0];
        res.render('getMateriaID', {layout: false, listar} );
    })
});


// Mostra os dados de uma materia específica para renderizar nos values dos input para editar os dados
app.get('/materia/edit/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM materia WHERE id = ${id}`;

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err);
        }
        const infos = data[0];
        res.render('updateMateria', {layout: false, infos})
    })
});

// Atualiza os dados de uma materia
app.post('/updatemat', (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const cargaHoraria = req.body.cargaHoraria;
    const tempos = req.body.tempos;
    const sql = `UPDATE materia SET nome = '${nome}', cargaHoraria = '${cargaHoraria}', tempos = '${tempos}' WHERE id = ${id}`;

   

    conn.query(sql, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/materia');
    })
});

// Remove uma materia do database
app.get('/removermateria/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM materia WHERE id = ${id}`;

    conn.query(sql, (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/materia');
    })
});

// Cria a conexão com o database
const conn = mysql.createConnection({
    host: '127.0.0.1',
    database: 'crud_api',
    port: '3306',    // <<< MUDAR DE ACORDO COM A SUA PORTA DO SERVIDOR 
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