import express from 'express';
import bodyParser from 'body-parser';
import { auth } from 'express-openid-connect';
import { requiresAuth } from 'express-openid-connect';
import getPollutionData from './helpers/getPollutionData';
import { get } from 'babel-register/lib/cache';
import {lookup} from 'geoip-lite';

const router = express.Router();

const app = express();
const port = process.env.PORT || 8080;
<<<<<<< HEAD
=======

// Then pass them to cors:

>>>>>>> 1eafa40c3de5c5240c46ff6ef1671cc0117c0773

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

<<<<<<< HEAD
const lat = 51.0;
const lon = 17.0;
=======
//TODO skorygować config
const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: 'http://localhost:8080',
    clientID: 'w70E9o8uRt6HRVO3vPf84ScBuX92J5Rb',
    issuerBaseURL: 'https://dev-uxai7-vh.eu.auth0.com',
    secret: 'LONG_RANDOM_STRING'
};
>>>>>>> 1eafa40c3de5c5240c46ff6ef1671cc0117c0773


app.use('/', router);

app.use('/data/pollution', (req, res) => {
    getPollutionData.getData(lat,lon).then((response) => {
        //res.json({status: "success", message: "profil", data:response})
        res.json({status: "success", message: "coś tam działa", data:response.data.forecast.daily});
    });
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