import {useEffect, useState} from "react";

import {getTodos} from "../../services";
import TodoComponent from "./TodoComponent";

export default function TodosComponent() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then(value => setTodos([...value.data]))
    }, []);
    return (
        <div>
            {
                todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
}