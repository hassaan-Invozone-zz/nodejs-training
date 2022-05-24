
const csv = require('csv-parser');
const fs = require('fs');


var func = {
    importCSV:  (path) => {
        return new Promise((resolve, reject) => {
            return fs.createReadStream(path)
                .pipe(csv())
                .on('data', (row) => {
                    return resolve(row);
                })
                .on('end', (row) => {
                    console.log('CSV file successfully processed');
                });
        });

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
