import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    if (todoMsg.trim()) {
      updateTodo(todo.id, { ...todo, todo: todoMsg });
      setIsTodoEditable(false);
    }
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-gray-700 rounded-lg px-3 py-1.5 gap-x-3 shadow-md duration-300 text-gray-200 ${
        todo.completed ? "bg-[#2E2E2E]" : "bg-[#3A3A3A]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg transition-colors duration-300 ${
          isTodoEditable ? "border-gray-700 px-2 focus:border-blue-500" : "border-transparent"
        } ${todo.completed ? "line-through text-gray-500" : "text-gray-200"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-700 justify-center items-center bg-[#444444] hover:bg-[#555555] transition duration-200 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          isTodoEditable ? editTodo() : setIsTodoEditable(true);
        }}
        disabled={todo.completed}
        aria-label={isTodoEditable ? "Save Todo" : "Edit Todo"}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-700 justify-center items-center bg-[#444444] hover:bg-[#555555] transition duration-200 shrink-0"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete Todo"
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
