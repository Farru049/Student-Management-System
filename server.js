const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

let students = require('./students.json');

// Get all students
app.get('/students', (req, res) => {
    res.json(students);
});

// Add a new student
app.post('/students', (req, res) => {
    const newStudent = { id: Date.now(), ...req.body };
    students.push(newStudent);
    fs.writeFileSync('students.json', JSON.stringify(students));
    res.json(students);
});

// Delete a student
app.delete('/students/:id', (req, res) => {
    students = students.filter(student => student.id !== parseInt(req.params.id));
    fs.writeFileSync('students.json', JSON.stringify(students));
    res.json(students);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
