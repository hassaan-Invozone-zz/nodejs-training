const service = require('./service')
const models = require('./models');
const User = models.User;


 // User.create({
 //     firstName: "Nathan",
 //     lastName: "Doe",
 //     companyId: 1,
 //     email: "nathan@mail.com",
 // }).then (r =>{
 //     console.log(r)
 // });

let result =  service.oldImportCSV(__dirname+'/seeders/company.csv').then(res => {
    console.log(res)
})
