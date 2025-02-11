require("dotenv").config(); 
const express = require("express");
const cors = require("cors");
const filmesRoutes = require("./src/routes/FilmesRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/filmes", filmesRoutes);

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});