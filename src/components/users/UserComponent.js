import PostsComponent from "../posts/PostsComponent";

export default function UserComponent({user, userIdState}) {
    const {id, name, email} = user;
    const {userId, setUserId} = userIdState;

    return (
        <div>
                <div>id:  {id}</div>
                <h3>{name}</h3>
                <div>{email}</div>
            <br/>
            <button onClick={() => setUserId(id)}>Show Posts</button>
            {userId === id && <PostsComponent userId={id}/>}
            <hr/>
        </div>
    );
}