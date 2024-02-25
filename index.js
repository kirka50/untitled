const express = require('express');
const path = require('path');
const app = express();
const PORT =  3000;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    // Отправляем файл index.html из папки public
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));