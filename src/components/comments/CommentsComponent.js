import {useEffect, useState} from "react";

import {commentsService} from "../../services";
import CommentComponent from "./CommentComponent";

export default function CommentsComponent() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService().then(({data}) => setComments(data))
    }, []);

    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
}