import { useState, useRef } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const input = useRef(null);
  const editInput = useRef(null);

  const addTodo = (event) => {
    event.preventDefault();
    console.log(input.current.value);
    todo.push({ title: input.current.value, id: Date.now() });
    setTodo([...todo]);
    console.log(todo);
    input.current.value = "";
  };

  const deleteTodo = (index) => {
    console.log('todo deleted', index);
    todo.splice(index, 1);
    setTodo([...todo]);
  };

  const editTodo = (index) => {
    const newTitle = prompt("Enter new title:");
    if (newTitle !== null) {
      todo[index].title = newTitle;
      setTodo([...todo]);
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
        }) : <h1></h1>}
      </ol>
    </>
  );
}

export default App;