import {Link} from "react-router-dom";

export default function CommentComponent({comment}) {
    const {postId, id, name, email, body} = comment;
    return (
        <div>
            <div>postId - {postId}</div>
            <div>id - {id}</div>
            <h3>{name}</h3>
            <h5>{email}</h5>
            <div>{body}</div>
            <span><Link to={comment.postId.toString()}>My Post</Link></span>
            <hr/>
        </div>
    );
}