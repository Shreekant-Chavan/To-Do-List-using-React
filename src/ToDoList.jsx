import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDo() {

    let [todos, setTodos] = useState([{task : "Sample-Task", id : uuidv4()}]);

    let [newTodos, setNewTodos] = useState("");

    let addNewTask = () => {
        setTodos( (prevTodos) => {
            return [...prevTodos, {task : newTodos, id : uuidv4()}]
        });
        setNewTodos("");
    }

    let updateTodoValue = (event) => {
        setNewTodos (event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos ( (prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let UpperCaseAll = () => {
        setTodos( (prevTodos) => 
            prevTodos.map( (todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        );
    };

    let UpperCaseOne = (id) => {
        setTodos( (prevTodos) => 
            prevTodos.map( (todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            })
        );
    }

    return (
        <div>
            <input placeholder="Add a task" value={newTodos} onChange={updateTodoValue}/>
            <br /> <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br />
            <hr />
            <h4>Task ToDo</h4>
            <ul>
                {
                    todos.map( (todo) => (
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp; &nbsp; &nbsp;
                            <button onClick={ () => deleteTodo(todo.id)}>Delete</button> &nbsp;
                            <button onClick={ () => UpperCaseOne(todo.id)}>UpperCase One</button>
                        </li>
                    ))
                }
            </ul>
            <br /><br />
            <button onClick={UpperCaseAll}>Upper Case All</button>
        </div>
    );
}