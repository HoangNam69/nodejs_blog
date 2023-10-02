const path = require('path')
const morgan = require('morgan')
const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Tamplate Engine
// Tạo tamplate
app.engine('hbs', engine({
    extname: '.hbs'// extname: út ngắn định dạng đuôi file
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// Route
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});