export default function PostComponent({post}) {
    const {id, userId, title, body} = post;

    return (
        <div>
            <div>id - {id}</div>
            <div>userId - {userId}</div>
            <h3>{title}</h3>
            <div>{body}</div>
            <hr/>
        </div>
    );
}