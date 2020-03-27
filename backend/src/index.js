/**
 * Metodos HTTP
 * 
 * GET: Buscar/listar informacao do back-end
 * POST: Criar uma informacao no back-end
 * PUT: Alterar uma informacao no back-end
 * DELETE: DEletar uma informacao no back-end
 * 
 */

/**
 * Tipos de parametros:
 * 
 * Query: Parametros nomeados enviados na rota apos ? (Filtros, paginacao) Ex.: /users?name=Jefferson
 * Route Params: PArametros utilizados para identificar recursos Ex.: /users/:id 
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 */

/**
 * Bancos de dados
 * 
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where() (KNEX)
*/

const cors = require('cors')
const express = require('express')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)