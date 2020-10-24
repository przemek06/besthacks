import axios from 'axios';

module.exports = {
    getChart: (labels, data) => {
        return axios.get(`https://quickchart.io/chart?c={type:'line',data:{labels:[${labels}],datasets:[{label:'pm10',data:[${data}]}]}}`)
                .then(response => response.data)
                .catch(err => {console.error(err, "err getChart")});
    }
}