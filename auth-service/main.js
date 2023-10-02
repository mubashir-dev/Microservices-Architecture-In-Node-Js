const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Auth MicroService! HELLO'));
app.get('/hello', (req, res) => res.send('Auth MicroService!'));

app.listen(3001, () => console.log(`auth-service: 3001!`));