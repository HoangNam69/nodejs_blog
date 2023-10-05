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
// đầu tiên đăng ký template engine là hbs, sau đó gọi template đã import và định dạng lại đuôi file
app.engine('hbs', engine({
    extname: '.hbs'// extname: út ngắn định dạng đuôi file
}));
// Đặt hbs là template mặc định cho view engine
app.set('view engine', 'hbs');
// Thiết lập đường dẫn đến folder views, để hiển thị giao diện lên màn hình
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