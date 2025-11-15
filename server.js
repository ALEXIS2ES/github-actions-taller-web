// server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal que responde con un mensaje
app.get("/", (req, res) => {
  res.status(200).send("¡Bienvenido al Taller de GitHub Actions!");
});

// Ruta de prueba
app.get("/api/status", (req, res) => {
  res.status(200).json({ status: "ok", environment: "development" });
});

// Exportar la aplicación para ser probada por Jest/Supertest
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;
