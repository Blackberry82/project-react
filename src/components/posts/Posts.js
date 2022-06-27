import {useEffect, useState} from "react";

import Post from "../post/Post";
import PostDetail from "../postDetail/PostDetail";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(value => {
                setPosts(value);
            });
    }, []);

    const getPost = (item) => {
        setPost(item);
    }
    return (
        <div>
            {
                post && <PostDetail post={post}/>
            }

            {
                posts.map(post => <Post
                    key={post.id}
                    item={post}
                    getPost={getPost}

                />)
            }
        </div>
    );
}