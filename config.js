// config.js
module.exports = {
  db: {
    uri: "mongodb://localhost:27017/crud-items",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
