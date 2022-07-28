import {Link} from "react-router-dom";

export default function CommentComponent({comment}) {
    return (
        <div>
                <div>id - {comment.id}</div>
                <div>postId - {comment.postId}</div>
                <h3>{comment.name}</h3>
                <h5>{comment.email}</h5>
                <div>{comment.body}</div>
            <Link to={comment.postId.toString()}>
                <button>Show Posts</button>
            </Link>

            <hr/>
        </div>
    );
}