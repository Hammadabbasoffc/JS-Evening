import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/profile', (req, res) => {
    res.send(`name: 'John Doe', age: 30`);
})

app.get("/hoodie", (req, res) => {
    res.send("<h1 style='color: red'>This is Butt Sahab Hoodie Page</h1>");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});