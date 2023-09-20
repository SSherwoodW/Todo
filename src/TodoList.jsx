import { useState } from "react";
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"

function TodoList() {
    const [todos, setTodos] = useState([]);

    // add a todo
    const create = (newTodo) =>
        setTodos(todos => [...todos, newTodo])
    
    // update a todo
    const update = (id, updatedTodo) => 
        setTodos(todos => 
            todos.map(todo => 
                todo.id === id ? { ...todos, task: updatedTodo } : todo
            )
        )
    
    // delete a todo by id
  const remove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };
    
    const todoComponents = todos.map(todo => 
        <Todo
            remove={remove}
            key={todo.id}
            id={todo.id}
            task={todo.task}
            update={update}
        />)
    
    return (
        <div>
            <NewTodoForm createTodo={create} />
            <ul>{todoComponents}</ul>
        </div>
    )
    
}

export default TodoList;