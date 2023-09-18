// Sample task data (replace with a data storage solution)
let tasks = [];

// DOM Elements
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

// Event listener for form submission
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    // Create a new task object
    const task = {
        title,
        description,
        dueDate,
        priority,
    };

    // Add the task to the tasks array (or send it to the backend)
    tasks.push(task);

    // Clear the form
    taskForm.reset();

    // Update the task list
    displayTasks();
});

// Function to display tasks
function displayTasks() {
    // Clear the existing task list
    taskList.innerHTML = '';

    // Loop through tasks and add them to the list
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${task.title}</strong>
            <p>${task.description}</p>
            <p>Due Date: ${task.dueDate}</p>
            <p>Priority: ${task.priority}</p>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Initial display of tasks
displayTasks();
