const { STRING } = require('sequelize')
//importando o arquivo db.js
const db = require('./db')

//criando tabela via sequeliza
const cadAluno = db.sequelize.define('dadosAluno', {

    nome: {

        type: db.Sequelize.STRING

    },

    idade: {

        type: db.Sequelize.INTEGER

    },

    tipoSanguineo: {

        type: db.Sequelize.STRING

    },

    matricula: {

        type: db.Sequelize.STRING

    },

    alergia: {

        type: db.Sequelize.STRING

    },

    medicamento: {

        type: db.Sequelize.STRING

    },

    telEmergencia: {

        type: db.Sequelize.STRING

    },

    turma: {

        type: db.Sequelize.STRING

    }

})

//cadAluno.sync({force: true})

module.exports = cadAluno

