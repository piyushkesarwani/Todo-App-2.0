const addTodoBtn = document.querySelector('.addTodoBtn');
const form = document.querySelector('.form');
const spanButtons = document.querySelector('span')
const todoContainer = document.querySelector('.todoContainer')


form.addEventListener('submit', (e) => {
	e.preventDefault();
})

addTodoBtn.addEventListener('click', (e) => {
	let input = e.currentTarget.previousElementSibling;
	let todo = input.value;
	input.value = "";
	
	if(todo){
		// let liElement = document.createElement('li');
		// liElement.textContent = todo;
		// console.log(liElement);
		// liElement.classList.add('list');

		// singleTodo.appendChild = liElement;

		const singleTodo = document.createElement('div');
		const li = document.createElement('li');
		const buttonComplete = document.createElement('button')
		const buttonDelete = document.createElement('button');
		const spanElementButton = document.createElement('span');

		buttonComplete.textContent = 'Complete';
		buttonDelete.textContent = 'Delete';

		li.classList.add('list');
		buttonComplete.classList.add('complete')
		buttonComplete.classList.add('btn')
		buttonDelete.classList.add('delete')
		buttonDelete.classList.add('btn')
		singleTodo.classList.add('singleTodo')

		singleTodo.appendChild(li);
		li.appendChild(document.createTextNode(todo));
		spanElementButton.appendChild(buttonComplete);
		spanElementButton.appendChild(buttonDelete);
		singleTodo.appendChild(li);
		singleTodo.appendChild(spanElementButton);
		todoContainer.appendChild(singleTodo);


		console.log(singleTodo);
		console.log(li);

		buttonDelete.addEventListener('click', (e) => {
			let deleteTodo = e.currentTarget.parentElement.parentElement;
			// console.log(deleteTodo);
			deleteTodo.remove();
		})

		buttonComplete.addEventListener('click', (e) => {
			let strikeTodoElement = e.currentTarget.parentElement.previousElementSibling;
			// console.log(strikeTodoElement);
			strikeTodoElement.classList.add('strikeThroughText')
			buttonComplete.remove();
		})
	}

	else {
		alert('todo List cannot be empty. Please Enter any todo');
	}

})