// full_server/controllers/StudentsController.js
const { readDatabase } = require('../utils');

class StudentsController {
    static getAllStudents(req, res) {
        const { filePath } = req.app.locals;  // Get the database file path from app locals

        readDatabase(filePath)
            .then((students) => {
                let response = 'This is the list of our students\n';

                Object.keys(students)
                    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))  // Sort fields alphabetically
                    .forEach((field) => {
                        response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
                    });

                res.status(200).send(response);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    }

    static getAllStudentsByMajor(req, res) {
        const { filePath } = req.app.locals;  // Get the database file path from app locals
        const { major } = req.params;

        if (!['CS', 'SWE'].includes(major)) {
            return res.status(500).send('Major parameter must be CS or SWE');
        }

        readDatabase(filePath)
            .then((students) => {
                const fieldStudents = students[major] || [];
                res.status(200).send(`List: ${fieldStudents.join(', ')}`);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    }
}

module.exports = StudentsController;
