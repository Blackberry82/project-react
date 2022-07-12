import {useEffect, useState} from "react";
import {getUser} from "../../services";
import UserComponent from "./UserComponent";

export default function UsersComponent() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUser().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
}