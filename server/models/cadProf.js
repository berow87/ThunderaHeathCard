//importando o arquivo db.js
const { STRING } = require('sequelize')
const db = require('./db')

//criando tabela via sequeliza
const cadProf = db.sequelize.define('dadosProf', {

    nome: {

        type: db.Sequelize.STRING

    },

    login: {

        type: db.Sequelize.STRING

    },

    email: {

        type: db.Sequelize.STRING

    },

    senha: {

        type: db.Sequelize.STRING

    },

    disciplina: {

        type: db.Sequelize.STRING

    },

    turma: {

        type: db.Sequelize.JSON

    }

})

//cadProf.sync({force: true})

module.exports = cadProf

