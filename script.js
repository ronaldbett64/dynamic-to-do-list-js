document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    loadTasks();

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');

        // Create a span to hold the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Event to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            saveTasks();
        };

        // Append elements
        li.appendChild(taskSpan);       // Add the task text
        li.appendChild(removeBtn);      // Add the remove button
        taskList.appendChild(li);       // Add the <li> to the list

        taskInput.value = "";           // Clear the input
        saveTasks();                    // Save updated task list
    }

    // Button click event
    addButton.addEventListener('click', addTask);

    // Enter key event
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        const items = taskList.querySelectorAll('li span');
        items.forEach(span => {
            tasks.push(span.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks from localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(taskText => {
            const li = document.createElement('li');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.className = "remove-btn";

            removeBtn.onclick = function () {
                taskList.removeChild(li);
                saveTasks();
            };

            li.appendChild(taskSpan);
            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }
});
