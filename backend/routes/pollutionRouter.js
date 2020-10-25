import express from 'express';
import chartDataProvider from '../helpers/chartDataProvider';
import getPollutionData from '../helpers/getPollutionData';

const router = express.Router();

const lat = 51.0;
const lon = 17.0;

router.get('/pm10', (req, res) => {
    getPollutionData.getData(lat,lon).then((response) => {
        
        // console.log(chartDataProvider.returnData(response.data.forecast.daily.pm10))
        const arr = response.data.forecast.daily.pm10;
        console.log(arr)
        const labels = chartDataProvider.returnLabels(arr);
        const data = chartDataProvider.returnData(arr);
        console.log(labels,data)
        const url = chartDataProvider.wykresUrl(labels,data);
        url.then((response2)=>{
           res.json({status: "success", message: "Wykres pm10", data: response2})
        });
            
    })
})
    

router.get('/aqi', (req, res) => {
    getPollutionData.getData(lat,lon).then((response) => {
        res.json({status: "succes", message: "Air quality index", data:response.data.aqi})
    });
});

router.get('/pm25', (req, res) => {
    getPollutionData.getData(lat,lon).then((response) => {
        
        // console.log(chartDataProvider.returnData(response.data.forecast.daily.pm10))
        const arr = response.data.forecast.daily.pm25;
        console.log(arr)
        const labels = chartDataProvider.returnLabels(arr);
        const data = chartDataProvider.returnData(arr);
        console.log(labels,data)
        const url = chartDataProvider.wykresUrl(labels,data);
        console.log(url)
        url.then((response2)=>{
            res.json({status: "success", message: "Wykres pm10", data: response2})
        });
        
    
    })
    .catch((err) => {
        console.error(err, "err 2");
    });
});

module.exports = router;