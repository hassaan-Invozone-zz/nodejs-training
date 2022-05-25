
const csv = require('csv-parser');
const fs = require('fs');
const { parse } = require('csv-parse');


var func = {
    oldImportCSV:  (path) => {
        results = [];
        return new Promise((resolve, reject) => {
            return fs.createReadStream(path)
                .pipe(csv())
                .on('data', (row) => {
                    const add = {
                        name: row.name ,
                        // lastName:row[2],
                        // email: row[1],
                        createdAt: new Date(),
                        updatedAt: new Date()
                    };
                    results.push(add);

                }).on('error', function(_err) {
                    reject(_err);
                }).on('end', function(_res) {
                    resolve(results);
                });
        });
    },
    newImportCSV:  () =>{
        const results = [];
        return new Promise((resolve,reject)=>{
            fs.createReadStream(__dirname+'/seeders/company.csv')
                .pipe(parse({ delimiter: ",", from_line: 2 }))
                .on("data",  function (row) {
                    const add = {
                        name: row[0] ,
                        // lastName:row[2],
                        // email: row[1],
                        createdAt: new Date(),
                        updatedAt: new Date()
                    };
                    results.push(add);
                })
                .on('close', () => {
                    resolve(results);
                });
        })
    },

    seedFromCsv:  (_q, _table, _file, _map, _types) => {
        let chunk = [];
        return new Promise((resolve, reject) => {
            return csv.parseFile(_file, {
                    trim: true,
                    objectMode: true,
                    ignoreEmpty: true,
                    discardUnmappedColumns: true,
                    headers: _map ? idxHeader : true,
                }).on('data', function(data) {
                    if (_map) {
                        data = _map(data);
                    }

                    Object.keys(data).forEach((_key) => {
                        data[_key] = data[_key] === 'null' ? null : data[_key];
                        data[_key] = data[_key] === 'true' ? true : data[_key];
                        data[_key] = data[_key] === 'false' ? false : data[_key];
                    });

                    chunk.push(data);

                    if (chunk.length >= 1000) {
                        Seeder.bulkInsert(_q, _table, chunk, _types);
                        chunk = [];
                    }
                })
                .on('error', function(_err) {
                    reject(_err);
                })
                .on('end', function(_res) {
                    chunk = Seeder.bulkInsert(_q, _table, chunk, _types);
                    resolve(_res);
                });
        });
    }};

module.exports = func;
