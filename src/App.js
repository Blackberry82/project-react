import {useState} from "react";

import Users from "./components/users/Users";
import {getUserPosts} from "./services";
import './App.css';

export default function App() {
    const [posts, setPosts] = useState([]);
    const getUserId = (id) => {
        getUserPosts(id).then(({data}) => setPosts([...data]));
    }
    return (
        <div>
            <div>
            <h1>User Posts</h1>
            {posts.map(value => <div key={value.id}>{value.title}</div>)}
           <Users getUserId={getUserId}/>
            </div>
        </div>
    );
}



