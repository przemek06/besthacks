import express from 'express';
import bodyParser from 'body-parser';
import { auth } from 'express-openid-connect';
import { requiresAuth } from 'express-openid-connect';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//TODO skorygować config
const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: 'http://localhost:3000',
    clientID: 'w70E9o8uRt6HRVO3vPf84ScBuX92J5Rb',
    issuerBaseURL: 'https://dev-uxai7-vh.eu.auth0.com',
    secret: 'LONG_RANDOM_STRING'
};

app.use(auth(config));

app.get('/', (req, res) => {
    res.json(req.oidc.isAuthenticated() ? {status: "success", message: "Logged in", data: null} : {status: "success", message:"Logged out", data: null});
});

app.get('/profile', requiresAuth(), (req, res) => {
    res.json({status: "success", message: "profil", data:req.oidc.user});
});

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