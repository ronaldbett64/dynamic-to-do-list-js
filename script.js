// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage on page load
    loadTasks();

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input text

        // Validate input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create <li> element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove task on click
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            saveTasks(); // Save updated list
        };

        // Append remove button to task
        li.appendChild(removeBtn);

        // Append task to list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";

        // Save updated tasks
        saveTasks();
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        const items = taskList.querySelectorAll('li');
        items.forEach(item => {
            tasks.push(item.firstChild.textContent); // Save only text
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks from localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(taskText => {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.className = "remove-btn";

            removeBtn.onclick = function () {
                taskList.removeChild(li);
                saveTasks();
            };

            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }
});
