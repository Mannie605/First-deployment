import React, { useState, useEffect } from 'react';

function TodoApp() {
    const [ todos, setTodos ] = useState(() => {
        // Load todos from localStorage when the component mounts
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [input, setInput] = useState('');

    //save todos to localStorage whenever 'todos changes or save the updated list to local storage
    //stringify converts the list to a string before saving
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // we used a spread operator for the todos (...todos) used to spread or copy properties
    // Add a new todo adds a new to-do item to the list 
    // text: input, completed: false adds a new object to todos
    // setInput('') should clear the input field after adding
    //.Itrim removes whitespace from both ends of a string. it doesn't affect the whitespace inside the string.
    const addTodo = () => {
        if (input.trim() === '') return;
        setTodos([...todos, { text: input, completed: false}]);
        setInput('');
    };

    // Toggles the completed status of a todo
    const toggleTodo = index => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);4
    };
    
    // Removes a to-do from the list by its index using filter
    const deleteTodos = index => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
            value={input}
            onChange={e => setInput (e.target.value)}
            placeholder="Add a new task"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todos, index) => (
                    <li
                    key={index}
                    style={{ textDecoration: todos.completed ? 'line-through' : 'none' }}
                    >
                        {todos.text}
                        <button onClick={() => toggleTodo(index)}>Toggle</button>
                        <button onClick={() => deleteTodos(index)}>Delete</button>
                    </li> 
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;