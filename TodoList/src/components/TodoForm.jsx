import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();

        if (!todo.trim()) {
            alert("Please enter a todo item."); // Basic validation alert
            return;
        }

        addTodo({ todo, completed: false });
        setTodo("");
    };

    return (
        <form onSubmit={add} className="flex">
            <label htmlFor="todo-input" className="sr-only">Todo</label>
            <input
                id="todo-input"
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 hover:bg-green-500 duration-150"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
