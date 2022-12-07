var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Osmenlli600',
        database: 'todo'
    }
});

module.exports = knex;