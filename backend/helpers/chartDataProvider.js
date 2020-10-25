import QuickChart from 'quickchart-js';

const myChart = new QuickChart();

module.exports = {
    wykresUrl: (labels,data) => {
        myChart
            .setConfig({
                type: 'line',
                data: { labels: labels, datasets: [{ label: 'pm10', data: data }] },
            })
            .setWidth(800)
            .setHeight(400)
            .setBackgroundColor('transparent')
            
        return myChart.getShortUrl()    
    },
    returnLabels: (arr) => {
        let result = [];
        arr.forEach(element => {
           result.push(element.day); 
        });
        return result;
    },
    returnData: (arr) => {
        let result = [];
        arr.forEach(element => {
            result.push(element.avg);
        });
        return result;
    }
}


