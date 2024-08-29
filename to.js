document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
        taskInput.focus();
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}
