document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const studentClass = document.getElementById('class').value;

    // Basic validation (ensure inputs are filled)
    if (name && age && studentClass) {
        // Create a new student object
        const student = {
            id: Date.now(), // Unique ID based on timestamp
            name: name,
            age: age,
            class: studentClass
        };

        // Add student to the list
        addStudentToList(student);

        // Reset the form
        document.getElementById('student-form').reset();
    } else {
        alert('Please fill all fields.');
    }
});

function addStudentToList(student) {
    const list = document.getElementById('student-list');

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.setAttribute('data-id', student.id);
    listItem.innerHTML = `
        ${student.name} (Age: ${student.age}, Class: ${student.class})
        <button class="delete-btn" onclick="deleteStudent(${student.id})">Delete</button>
    `;

    // Add the list item to the student list
    list.appendChild(listItem);
}

function deleteStudent(id) {
    const list = document.getElementById('student-list');
    const listItem = document.querySelector(`li[data-id='${id}']`);

    if (listItem) {
        list.removeChild(listItem);
    }
}
