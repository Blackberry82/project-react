import {useEffect, useState} from "react";

import {userService} from "../../services";
import UserComponent from "./UserComponent";

export default function UsersComponent() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
}