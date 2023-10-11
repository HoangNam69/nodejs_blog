const path = require('path')
const morgan = require('morgan')
const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// Xử lý lưu dữ liệu khi post và gán dữ liệu vào body. express sử dụng thư viện body parser để gáp dữ liệu vào body, body parser dùng qs npm(query string) để trả về dữ liệu dạng object cho body parser
app.use(express.urlencoded({
    extended: "true"
})); // hỗ trợ cho việc submit ở form
app.use(express.json()); // Hỗ trợ cho việc submit ở js (XMLHTTP, fetch, ajax, axios)


// HTTP logger
// app.use(morgan('combined'));

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

// Render giao diện search khi người dùng truy cập url
app.get('/search', (req, res) => {
    res.render('search');
});
// Gửi dữ liệu từ phía người dùng về server
app.post('/search', (req, res) => {
    console.log(req.body)
    res.send("");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});