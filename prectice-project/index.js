const express = require('express');
const models = require('./models');

const { User } = models;
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

// CONSTANTS
dotenv.config();
const PORT = process.env.PORT || 8000;

// MIDDLEWARES
app.use(express.json({ limit: '50mb' })); // to return files as json
app.use(cors()); // for cross origin  files

// ROUTES
app.use('/auth', require('./routes/auth'));

app.get('/', async (req, res, next) => {
  //  UploadInvoice.create(
  //     {paymentId: 4, UserId: 1,  invoice: 'DOE', status: 'pending'}
  // )
  //     .then((newUsers) => {
  //         console.log(newUsers)
  //     })
  //     .catch((err) => {
  //         console.log("Error while users creation : ", err)
  //     })

  // User.findByPk(1, {include: ['invoices']})
  //     .then((company) => {
  //         // Get the Company with Users (employes) datas included
  //         console.log(company.invoices.find())
  //         // Get the Users (employes) records only
  //         // console.log(company.get().employes)
  //     })
  //     .catch((err) => {
  //         console.log("Error while find company : ", err)
  //     })
  res.send('Hello World');
});
// SERVER PORT
app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
