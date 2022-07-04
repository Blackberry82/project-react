import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services";
import User from "../user/User";
import './users.css';

export default function Users ({getUserId}) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
    },[]);
    return (
        <div>
            {users.map(data =>
                <User key={data.id}
                      item={data}
                      getUserId={getUserId}
                />)}
        </div>
    );
};

