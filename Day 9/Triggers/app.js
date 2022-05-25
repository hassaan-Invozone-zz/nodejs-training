const models = require('./models');
const Company = models.Company;

Company.create({
    name: 'hassaan',
}).then(res => {
    // console.log(res)
}).catch(err =>{
    // console.log('err.name', err.name);
    // console.log('err.message', err.message);
    // console.log('err.errors', err.errors);
    err.errors.map(e => console.log(e.message)) })

Company.afterCreate(async (user,options) =>{
    // console.log('@user',user)
})
