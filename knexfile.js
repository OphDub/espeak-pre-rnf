module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/espeak',
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    }
  },
};
