import { useState, useRef } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const input = useRef(null);

  const addTodo = (event) => {
    event.preventDefault();
    console.log(input.current.value);
    const newTodo = { title: input.current.value, id: Date.now() };
    setTodo([...todo, newTodo]);
    console.log(todo);
    input.current.value = "";
  };

  const deleteTodo = (index) => {
    console.log('todo deleted', index);
    setTodo(todo.filter((item, i) => i !== index));
  };

  const editTodo = (index) => {
    const newTitle = prompt("Enter new title:");
    if (newTitle !== null) {
      const updatedTodo = todo.map((item, i) => {
        if (i === index) {
          return { ...item, title: newTitle };
        }
        return item;
      });
      setTodo(updatedTodo);
    }
  };

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="enter todo" ref={input} />
        <button type="submit">Add Todo</button>
      </form>
      <ol>
        {todo.length > 0 ? todo.map((item, index) => {
          return (
            <li key={index}>
              {item.title}
              <button onClick={() => deleteTodo(index)}>Delete</button>
              <button onClick={() => editTodo(index)}>Edit</button>
            </li>
          );
        }) : <h3>Todo List empty</h3>}
      </ol>
    </>
  );
}

export default App;