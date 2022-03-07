const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());


const port = process.env.PORT || 3000;

//app.get('/', function (req, res) {
//  res.send('Hello World')
//})

app.get('/', (req, res) => {
    req.sendFile('singup.html')
});



/* CRUD
- [GET] /users - retorna lista de usuários
- [GET] /users/{id} - retorna um único usuário
- [POST] /users - cria um novo usuário
- [PUT] /users/{id} - atualiza um usuário pelo id
- [DELETE] /users/{id} - remove um usuário pelo id
*/

const users = [];


// - [GET] /users - retorna um único usuário
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});


//- [GET] /users/{id} - retorna lista de usuários
app.get('/users', (req, res) => {
    res.send(users.filter(Boolean))
});

// - [POST] /users - cria um novo usuário
app.post('/users', (req, res) => {
    const user = req.body;

    users.push(user);

    res.send(user);
});

// - [PUT] /users/{id} - atualiza um usuário pelo id
app.put('/users/:id', (req, res) => {
    const id = req.params.id;

    const user = req.body.user;

    users[id] = user;

    req.send(user)

});

// - [DELETE] /users/{id} - remove um usuário pelo id
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;

    delete users[id]

    res.send(users[id])
});


app.listen(port, () => {
    console.info(`Aplicação rodando em: http://localhost:${port}`);
});