// Get the elements
const taskInput = document.getElementById('new-task');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Add new task
addButton.addEventListener('click', function() {
  // Create new li and span elements
  const newTask = document.createElement('li');
  const taskText = document.createElement('span');
  const taskButton = document.createElement('button');

  // Add text to span element
  taskText.textContent = taskInput.value;

  // Add button text and event listener
  taskButton.textContent = 'Delete';
  taskButton.addEventListener('click', function() {
    newTask.remove();
  });

  // Append span and button elements to li element
  newTask.appendChild(taskText);
  newTask.appendChild(taskButton);

  // Append li element to ul element
  taskList.appendChild(newTask);

  // Clear input field
  taskInput.value = '';
});
