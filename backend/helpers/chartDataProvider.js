module.exports = {
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