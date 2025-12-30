const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Servir frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// API pour inscription
app.post("/api/register", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Nom et email requis" });
  }

  const sql = "INSERT INTO participants (name, email) VALUES (?, ?)";
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erreur serveur" });
    }
    res.json({ message: "Inscription réussie ✅" });
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
