import {useEffect, useState} from "react";
import {todosService} from "../../services";
import TodoComponent from "./TodoComponent";

export default function TodosComponent() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService().then(({data}) => setTodos(data))
    }, []);

    return (
        <div>
            {
                todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
}
