// Run after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Trim whitespace

        // Check if input is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new task list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove task on button click
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to list item
        li.appendChild(removeBtn);
        // Append list item to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
