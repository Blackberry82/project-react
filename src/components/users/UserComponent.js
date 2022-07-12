export default function UserComponent({user}) {

    return (
        <div>
                <div>id:  {user.id}</div>
                <h3>{user.name}</h3>
                <div>{user.email}</div>
            <br/>
            <button>Ditailes</button>
            <hr/>
        </div>
    );
}