import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';
import userRouter from './routes/userRouter';
import validateUser from './helpers/validateUser';
import pollutionRouter from './routes/pollutionRouter';


const app = express();
const port = process.env.PORT || 8080;

app.set('secretKey', 'DmlXfet1E2BZmIEz');

const url = 'mongodb+srv://appbackend:vBEwVA1pD5drErcj@cluster0.kbsoq.mongodb.net/<dbname>?retryWrites=true&w=majority';
const db = mongoose.connect(url, {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/User',userRouter);

app.use('/data/pollution/', pollutionRouter);


//express nie ogarnia błędu 404
app.use((req, res, next) => {
    let err = new Error('Nie znaleziono');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err);

    if(err.status === 404)
        res.status(404).json({message: "Nie znaleziono"});
    else 
        res.status(500).json({message: "Coś poszło nie tak! :("});

});


app.listen(port, () => {
    console.log(`App listens on port: ${port}`)
})
