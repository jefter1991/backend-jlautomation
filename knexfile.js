// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host:"us-cdbr-east-04.cleardb.com",
      database:"heroku_4c46b1597d3785e",
      user:"b28cf082aaa9f7",
      password:"4410ba3a"
    },
    pool:{
      min:2,
      max:10
    },
    migrations:{
      directory:'./src/database/migrations'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
