// Importando express
var express = require('express');
const app = express();

const bodyParser = require('body-parser')

const exphbs = require('express-handlebars')
const path = require('path')

const db = require('./models/db')
const cadProf = require('./models/cadProf')
const cadAluno = require('./models/cadAluno')

app.use(express.static(path.join(__dirname, 'views')));
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs',
    exphbs.engine({
        defaultLayout: 'main',
        extname: '.hbs',
        layoutsDir: path.join(__dirname, 'views/layout')
    }))

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//rota de página inicial de login
app.get('/login', (req, res) => {
    res.render('login'); // Renderiza o arquivo 'mainfiltro.hbs'
});

//rota para cadastrar acesso de professor
app.get('/cad-professor', (req, res) => {

    res.render('dados-prof');

})

//rota para filtro após professor cadastrado
app.post('/main-filtro-profCad', (req, res) => {

    cadProf.create({

        nome: req.body.nome,
        login: req.body.login,
        email: req.body.email,
        senha: req.body.senha,
        disciplina: req.body.disciplina,
        turma: req.body.turma
        
    }).then(function(){

        res.render('main-filtro-profCad')
    
    }).catch(function(erro){
    
        res.send('Deu o seguinte erro: '+erro)
    
    })

})

//rota de inserção de dados para cadastrar um aluno
app.get('/cad-aluno', (req, res) => {

    res.render('dados-alunos');

})

//rota para filtro após aluno cadastrado
app.post('/main-filtro-AlunoCad', (req, res) => {

    idadeAluno = parseInt(req.body.idade)
    cadAluno.create({

        nome: req.body.nome,
        idade: idadeAluno,
        tipoSanguineo: req.body.tipoSanguineo,
        matricula: req.body.matricula,
        alergia: req.body.alergia,
        medicamento: req.body.medicamento,
        telEmergencia: req.body.telEmergencia,
        turma: req.body.turma
        
    }).then(function(){

        res.render('dados-alunos')
    
    }).catch(function(erro){
    
        res.send('Deu o seguinte erro: '+erro)
    
    })

})

//rota de inserção de dados para cadastrar um aluno e conclusão do forms
// app.get('/cad-aluno2', (req, res) => {

//     res.render('dados-alunos2');

// })


//rota para encontrar alunos cadastrados
app.get('/main-filtro', (req, res) => {

    res.render('main-filtro');

})

//após o cadastro do professor/aluno, é  levado para esta rota
app.post('/main-filtro', (req, res) => {

    res.render('main-filtro');
    res.render('menu-botoes');

})

//rotas de envio
//envio de cadastro de Aluno
app.post('/encontrarAluno', (req, res) => {


    res.render('dados-prof');

})


//rota para cadastrar aluno
// app.post('/cadAluno', (req, res) => {

//     nome = req.body.nomeProf;
//     matricula = req.body.matricula;
//     cpf = req.body.cpf;
//     datanasc = req.body.data - nasc;
//     email = req.body.email;
//     tel = req.body.telefone;


//     //res.render('dados-prof');
//     //res.send(nome+" "+matricula+" "+cpf);
// })

//rota para cadastrar aluno2
// app.post('/cadAluno2', (req, res) => {

//     nome = req.body.nomeProf;
//     matricula = req.body.matricula;
//     cpf = req.body.cpf;
//     datanasc = req.body.data - nasc;
//     email = req.body.email;
//     tel = req.body.telefone;

//     lista = [nome, matricula, cpf, datanasc, email, tel]

//     return lista


//     //res.render('dados-prof');
//     //res.send(nome+" "+matricula+" "+cpf);
// })

db.sequelize.authenticate().then(function () {
    console.log('Conectado com sucesso!');
}).catch(function (erro) {
    console.log('Falha ao se conectar');
});

app.listen(8081, function () {
    console.log('Servidor funcionando na url "localhost"');
});
