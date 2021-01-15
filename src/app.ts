import express from 'express';

const app: express.Application = express();

app.get('/' , (req , res) => {
    res.send('hello world');
});

app.listen(8080 , () => {
    console.log('server started');
});