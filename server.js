'use strict';
const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/app.html');
});

app.listen(port, () => {
    console.log(`Life Game listening at http://localhost:${port}`)
})
