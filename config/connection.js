const { connect, connection } = require("mongoose");

connect(process.env.MONGODB_URI || "mongodb://localhost/database-name");

module.exports = connection;
