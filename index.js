const morgan = require('morgan')
const express = require('express');
const app = express();
const port = 3000;

app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send("Hello Word!")
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});