const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/build/*', (req, res) => {
  const filePath = path.join(__dirname, 'build', req.params[0]);
  res.sendFile(filePath);
});


//app.use(express.static(path.join(__dirname, "build" )));

app.get("/api", (req, res) => {
  res.json({ message: "Привет, мир!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
