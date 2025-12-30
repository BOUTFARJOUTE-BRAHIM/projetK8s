const mysql = require("mysql2");

// Connexion à MySQL
const connection = mysql.createConnection({
  host: "localhost",       // ou IP de ton serveur MySQL
  user: "user_tombola",            // ton utilisateur MySQL
  password: "Salondreyas@0",     // ton mot de passe MySQL
  database: "tombola"
});

connection.connect(err => {
  if (err) throw err;
  console.log("Connecté à MySQL ✅");
});

module.exports = connection;
