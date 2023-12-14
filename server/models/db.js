// Importando e configurando sequelize (query to database)
const Sequelize = require('sequelize');
const sequelize = new Sequelize('thunderahealth', 'root', '122604Fqv@', {
    host: "localhost",
    dialect: "mysql"
})


//exportando os modulos
module.exports = {

    Sequelize: Sequelize,
    sequelize: sequelize

}