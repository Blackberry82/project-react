import {useEffect, useState} from "react";

import User from "../user/User";
import UserDetails from "../userDetails/UserDetails";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });

    }, []);

    const getUser = (item) => {
        setUser(item);
    }

    return (
        <div>
            {
                user && <UserDetails user={user}/>
            }

            {users.map(user =><User
                key={user.id}
                item={user}
                getUser={getUser}
            />)}


        </div>
    );
}

