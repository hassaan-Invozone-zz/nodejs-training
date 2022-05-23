const service = require('./service')

let result = service.importCSV(__dirname+'/seeders/test.csv').then(res => {

console.log(result)
})
