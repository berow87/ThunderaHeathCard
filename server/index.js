// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const { collection, addDoc } = require('firebase/firestore');
const db = require('./firebase'); // Importa a configuração do Firebase

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.json());

// Rota para lidar com o cadastro de professores
app.post('/api/cadastrar-professor', async (req, res) => {
  try {
    const { nomeCompleto, nomeUsuario, email, senha, disciplina } = req.body;

    // Adiciona o professor à coleção "professores" no Firebase
    const docRef = await addDoc(collection(db, 'professores'), {
      nomeCompleto,
      nomeUsuario,
      email,
      senha,
      disciplina,
    });

    console.log('Professor cadastrado com ID: ', docRef.id);
    res.status(200).json({ mensagem: 'Professor cadastrado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao cadastrar professor.' });
  }
});

// Rota para lidar com o cadastro de alunos
app.post('/api/cadastrar-aluno', async (req, res) => {
  try {
    const {
      nomeCompleto,
      idade,
      tipoSanguineo,
      matricula,
      alergias,
      fazUsoDeMedicamentos,
      contatoEmergencia,
      sala,
    } = req.body;

    // Adiciona o aluno à coleção "alunos" no Firebase
    const docRef = await addDoc(collection(db, 'alunos'), {
      nomeCompleto,
      idade,
      tipoSanguineo,
      matricula,
      alergias,
      fazUsoDeMedicamentos,
      contatoEmergencia,
      sala,
    });

    console.log('Aluno cadastrado com ID: ', docRef.id);
    res.status(200).json({ mensagem: 'Aluno cadastrado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao cadastrar aluno.' });
  }
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
