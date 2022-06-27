export default function PostDetail({post}) {
    return (
        <div>
            <div>{post.userId}</div>
            <div>{post.title}</div>
            <div>{post.id}</div>
            <div>{post.body}</div>
        </div>
    );
}