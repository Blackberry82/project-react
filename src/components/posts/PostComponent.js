export default function PostComponent({post}) {

    return (
        <div>
                <div>id:   {post.id}</div>
                <h3>{post.name}</h3>
                <div>{post.body}</div>
            <hr/>
        </div>
    );
}