export default function TodoComponent({todo}) {
    const {userId, id, title} = todo;
    return (
        <div>
            <div>userId - {userId}</div>
            <div>id - {id}</div>
            <h3>{title}</h3>
            <hr/>
        </div>
    );
}
