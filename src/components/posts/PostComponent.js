export default function PostComponent({post}) {

    return (
        <div>
            <div>userId - {post.userId}</div>
            <div>id - {post.id}</div>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
            <hr/>
        </div>
    );
}