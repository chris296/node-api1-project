const express = require('express');

const server = express();

let users = [
    {
        id: 1,
        name: 'Christian Rios',
        bio: 'lorem ipsum'
    },
    {
        id: 2,
        name: 'John Smith',
        bio: 'lorem ipsum'
    }
];

server.use(express.json());

server.get('/', (req, res) => {
    res.json({ api: 'running...'});
});

server.get('/api/users', (req, res) => {
    res.json(users);
});

server.get("/api/users/:id", (req, res) => {
    const id = req.params.id;

    const user = users.find((user) => user.id == id);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "The user with the specified ID does not exist."});
    }
});

server.post("/api/users", (req, res) => {
    const userInfo = req.body;

    users.push(userInfo);

    res.status(201).json(users);
});

const port = 5000;
server.listen(port, () => console.log(`\n== api on port ${port} ==\n`));