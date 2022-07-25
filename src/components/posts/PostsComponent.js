import {useEffect, useState} from "react";

import {postService} from "../../services";
import PostComponent from "./PostComponent";

export default function PostsComponent() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
}