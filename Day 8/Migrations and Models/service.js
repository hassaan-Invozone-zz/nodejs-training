
const csv = require('csv-parser');
const fs = require('fs');


var func = {
    importCSV: async function  (path) {
        await fs.createReadStream(path)
            .pipe(csv())
            .on('data', (row) => {
                return row;
            })
            .on('end', () => {
                console.log('CSV file successfully processed');
            });
    }
};

module.exports = func;
