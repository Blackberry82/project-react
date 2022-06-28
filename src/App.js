import Users from "./components/users/Users";

import {useState} from "react";
import {getUserPosts} from "./services";

export default function App() {
    const [posts, setPosts] = useState([]);
    const getUserId = (id) => {
        getUserPosts(id).then(({data}) => setPosts([...data]));
    }
    return (
        <div>
            <h1>User Posts</h1>
            {posts.map(value => <div>{value.title}</div>)}
           <Users getUserId={getUserId}/>
        </div>
    );
}



