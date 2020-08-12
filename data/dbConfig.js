const knex = require("knex");

const knexfile = require("../knexfile");

//  Use postgres by
//  --> changing database to "production"
//  --> updating knexfile.js accordingly
const database = "development";

module.exports = knex(knexfile[database]);
