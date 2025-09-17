const { addTask } = require('./todo');

describe('Todo App', () => {
	it('should add a new task to the list', () => {
		let tasks = [];
		tasks = addTask(tasks, 'Write Test');
		expect(tasks).toContain('Write Test');
		expect(tasks.length).toBe(1);
	});
});
