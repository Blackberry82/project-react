export default function TodoComponent({todo}) {
    return (
        <div>
                <div>id - {todo.id}</div>
                <div>userId - {todo.userId}</div>
                <h3>{todo.title}</h3>
            <hr/>
        </div>
    );
}
