import {useParams} from "react-router";
import {useEffect, useState} from "react";

import {getPosts} from "../../services";
import PostComponent from "./PostComponent";

export default function PostsComponent() {
    const {postId} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(postId).then(value => setPosts([{...value}]))
    }, [postId]);

    return (
        <div>
            {
                posts.map(value => <PostComponent key={value.id} post={value}/>)
            }
        </div>
    );
}