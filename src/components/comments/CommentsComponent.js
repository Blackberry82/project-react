import {useEffect, useState} from "react";

import {getComments} from "../../services";
import CommentComponent from "./CommentComponent";

export default function CommentsComponent() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments([...value.data]))
    }, []);

    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
}