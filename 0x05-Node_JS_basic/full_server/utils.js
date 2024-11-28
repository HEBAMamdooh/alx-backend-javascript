// full_server/utils.js
const fs = require('fs');
const path = require('path');

const readDatabase = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(filePath), 'utf-8', (err, data) => {
            if (err) {
                reject('Cannot load the database');
                return;
            }

            const students = {};
            const lines = data.split('\n').filter(line => line.trim() !== ''); // Filter out empty lines

            lines.forEach((line, index) => {
                if (index === 0) return; // Skip header line
                const [firstname, lastname, age, field] = line.split(',');

                if (!students[field]) students[field] = [];
                students[field].push(firstname);
            });

            resolve(students);
        });
    });
};

module.exports = { readDatabase };
