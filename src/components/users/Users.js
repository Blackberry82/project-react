import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services";
import User from "../user/User";

export default function Users (onclick) {
    const onclick = () => {getUserId(user.id)

    }
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
    },[]);
    return (
        <div>
            {users.map(data =>
                <User key={data.id}
                      user={data}
                      onclick={onclick}
                />)}
        </div>
    );
};

