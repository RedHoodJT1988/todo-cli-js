const { addTask, deleteTask } = require('./todo');

describe('Todo App', () => {
	it('should add a new task to the list', () => {
		let tasks = [];
		tasks = addTask(tasks, 'Write Test');
		expect(tasks).toContain('Write Test');
		expect(tasks.length).toBe(1);
	});
	it('should delete a task from the list', () => {
		let tasks = ['Write Test', 'Drink coffee'];
		tasks = deleteTask(tasks, 'Write Test');
		expect(tasks).toContain('Drink coffee');
		expect(tasks.length).toBe(1);
	});
});
