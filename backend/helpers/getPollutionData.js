import axios from 'axios';

module.exports = {
    getData: (lat, lon) => {
        return axios.get(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=ea5d41243d06d7e139aff0544ab604b4e812f768`)
                .then(response => response.data)
                .catch(err => {console.error(err)})
    }
}
