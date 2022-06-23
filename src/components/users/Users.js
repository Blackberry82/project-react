import {useEffect, useState} from "react";
import User from "../user/User";
export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});
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

            {user.id && <div>{user.email},
            {user.address.city},
            {user.phone},
            {user.website},
            {user.company.name}
            </div>}
            <h2>Users List</h2>
            {users.map((user, index) =><User
                key={user.id}
                item={user}
                getUser={getUser}
            />)}


        </div>
    );
}

