const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000; // Используем порт 5000 или порт из переменной окружения

// Обслуживание статических файлов из папки build
app.use(express.static(path.join(__dirname, 'build')));

// API-эндпоинт
app.get('/api', (req, res) => {
    res.json({ message: 'Привет, мир!' });
});

// Обработка любых других маршрутов, возвращая index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
