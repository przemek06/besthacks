import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';
import getPollutionData from './helpers/getPollutionData';
import userRouter from './routes/userRouter';
import validateUser from './helpers/validateUser';
import chartDataProvider from './helpers/chartDataProvider';
import drawChart from './helpers/drawChart';

const app = express();
const port = process.env.PORT || 8080;

app.set('secretKey', 'DmlXfet1E2BZmIEz');

const url = 'mongodb+srv://appbackend:vBEwVA1pD5drErcj@cluster0.kbsoq.mongodb.net/<dbname>?retryWrites=true&w=majority';
const db = mongoose.connect(url, {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//TODO zautomatyzuj to jak potrafisz
const lat = 51.0;
const lon = 17.0;

app.use('/api/User',userRouter);

app.use('/data/pollution', (req, res) => {
    getPollutionData.getData(lat,lon).then((response) => {
        
        // console.log(chartDataProvider.returnData(response.data.forecast.daily.pm10))
        const arr = response.data.forecast.daily.pm10;
        console.log(arr)
        const labels = chartDataProvider.returnLabels(arr);
        const data = chartDataProvider.returnData(arr);
        console.log(labels,data)
        drawChart.getChart(labels,data)
            .then((response2) => {
                res.json({status: "success", message: "Wykres się wygenerował pomyślnie", data: response2});
                //console.log(response2)
            })
            .catch((err)=>{
                console.error(err,"err 1")
            });
                         
        })
        .catch((err) => {
            console.error(err, "err 2");
        })
    .catch((err) => {
        console.error(err, "err 2");
    });
})





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
