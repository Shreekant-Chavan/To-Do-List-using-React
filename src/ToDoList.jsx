import { useState } from "react";

export default function ToDo() {

    let [todos, setTodos] = useState(["Sample State"]);

    let [newTodos, setNewTodos] = useState("");

    let addNewTask = () => {
        setTodos([...todos, newTodos]);
        setNewTodos("");
    }

    let updateTodoValue = (event) => {
        setNewTodos (event.target.value);
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
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    );
}