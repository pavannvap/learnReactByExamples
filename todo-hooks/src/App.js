import React, { useState, useEffect } from "react";

let currentTodos = [
  {
    text: "Learn about React",
    isCompleted: false
  },
  {
    text: "Meet friend for lunch",
    isCompleted: false
  },
  {
    text: "Build really cool todo app",
    isCompleted: false
  }
];

function Todo({ todo, index, completed }) {
  return (
    <li
      key={index}
      className={todo.isCompleted ? "completed" : "not-completed"}
      onClick={todoItem => completed(index)}
    >
      {todo.text}
    </li>
  );
}

function TodoForm({ addtodo }) {
  const [newtodo, setnewtodo] = useState("");
  const addNewTodo = (e, value) => {
    e.preventDefault();
    if (!value) return;
    addtodo(value);
    setnewtodo("");
  };
  return (
    <form onSubmit={e => addNewTodo(e, newtodo)}>
      <input
        type="text"
        value={newtodo}
        onChange={e => setnewtodo(e.target.value)}
      />
    </form>
  );
}

function Actions({ doFilter }) {
  return (
    <div>
      <button onClick={() => doFilter(null)}>all</button>
      <button onClick={() => doFilter(false)}>pending</button>
      <button onClick={() => doFilter(true)}>completed</button>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState(currentTodos);
  const [filter, setFilter] = useState(null);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    setPendingTasks(
      () => todos.filter(todoItem => !todoItem.isCompleted).length
    );

    setCompletedTasks(
      () => todos.filter(todoItem => todoItem.isCompleted).length
    );
  });

  const completed = index => {
    const curTodo = todos[index];
    curTodo.isCompleted = !curTodo.isCompleted;
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const addTodo = newtodo => {
    const newtodos = [...todos, { text: newtodo, isCompleted: false }];
    setTodos(newtodos);
  };

  return (
    <div>
      <h4>Pending Tasks( {pendingTasks} )</h4>
      <h4>Completed Tasks( {completedTasks} )</h4>
      <h4>All Tasks( {completedTasks + pendingTasks} )</h4>
      <TodoForm addtodo={addTodo} />
      <ul>
        {filter === null
          ? todos.map((todoItem, index) => (
              <Todo todo={todoItem} index={index} completed={completed} />
            ))
          : todos.map(
              (todoItem, index) =>
                todoItem.isCompleted === filter && (
                  <Todo todo={todoItem} index={index} completed={completed} />
                )
            )}
      </ul>
      <Actions doFilter={setFilter} />
    </div>
  );
}

export default App;
