import {useParams} from "react-router";
import {useEffect, useState} from "react";

import {postCurrentService} from "../../services";
import PostComponent from "./PostComponent";

export default function PostsComponent() {
    const {postId} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postCurrentService(postId).then(data => setPosts([{...data}]))
    }, [postId]);

    return (
        <div>
            {
                posts.map(post => <PostComponent post={post} key={post.id}/>)
            }
        </div>
    );
}