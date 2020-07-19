module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10),
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        ssl: !!(
          process.env.DATABASE_SSL &&
          process.env.DATABASE_SSL.toLowerCase() === "true"
        ),
      },
      options: {},
    },
  },
});
