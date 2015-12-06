module.exports = {
  test: {
    client: 'pg',
    debug: process.env.PG_DEBUG || false,
    connection: {
      database: 'ppom_dev',
    },
    migrations: {
      directory: './api/models/migrations',
      tableName: 'dev_migrations',
    },
    seeds: {
      directory: './api/models/seeds',
    }
  },
};
