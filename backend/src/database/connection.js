const knex = require('knex')
const configuration = require('../../knexfile')

const connection = knex(configuration.development)

// Exportando conexao com o banco de dados
module.exports = connection