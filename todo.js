function addTask(tasks, newTask) {
	return [...tasks, newTask];
}

function deleteTask(tasks, taskToDelete) {
	return tasks.filter(task => task !== taskToDelete);
}

module.exports = { addTask, deleteTask};