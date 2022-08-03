import Users from "../users/Users";
import {useState} from "@types/react";
import {getUserPosts} from "../../services";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    const getUserId = (id) => {
        getUserPosts(id).then(({data}) => console.log([{...data}]));
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