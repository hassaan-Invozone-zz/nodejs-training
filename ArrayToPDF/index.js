const express = require('express');
const app = express();

var bodyParser = require('body-parser');
const fs = require("fs");
const path = require("path");
const pdf = require('pdf-creator-node');
const expressLayouts = require('express-ejs-layouts');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(expressLayouts);

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/get-data', (req, res) => {
    var dummyData = [
        {
            name:'John',
            surname:'Doe',
            age:25
        },
        {
            name:'Jane',
            surname:'War',
            age:21
        },
        {
            name:'Shane',
            surname:'Meyer',
            age:22
        }
    ]
    res.status(200).json({
        data: dummyData,
    });
});

app.post('/download-pdf', (req, res) => {
        const html = fs.readFileSync(path.join(__dirname, './views/template.html'), 'utf-8');
        const filename = Math.random() + '_doc' + '.pdf';

        const document = {
            html: html,
            data: {
                products:  req.body.data
            },
            path: './docs/' + filename
        }
        pdf.create(document, {
            formate: 'A3',
            orientation: 'portrait',
            border: '2mm',
            header: {
                height: '15mm',
                contents: '<h4 style=" color: red;font-size:20;font-weight:800;text-align:center;">CUSTOMER INVOICE</h4>'
            }
        })
            .then(res => {
                console.log(res);
            }).catch(error => {
            console.log(error);
        });
    const filepath = 'http://localhost:3000/docs/' + filename;

    res.render('download', {
        path: filepath
    });
});


app.listen(3000, () => {
    console.log('listening on *:3000');
});
