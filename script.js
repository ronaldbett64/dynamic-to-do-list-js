document.addEventListener('DOMContentLoaded', function () {
  //Select DOM elements
  const addButton = document.getElementById('add-button');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  //Create the addTask function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn'); 

    // Remove task when button is clicked
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = ""; // clear input
  }

  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
