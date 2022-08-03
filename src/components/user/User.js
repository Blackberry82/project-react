export default function User({user, onclick}) {
        const {id, name, username} = user;
    return (
        <div>
            <div>{id}</div>
            <h2>{name}</h2>
            <h3>{username}</h3>
            {/*<div>{user.email}</div>*/}
            {/*<div>{user.address.city}</div>*/}
            {/*<div>{user.address.street}</div>*/}
            {/*<div>{user.address.suite}</div>*/}
            {/*<div>{user.address.zipcode}</div>*/}
            {/*<div>{user.address.geo.lat}</div>*/}
            {/*<div>{user.address.geo.lng}</div>*/}
            {/*<div>userm.phone}</div>*/}
            {/*<div>{user.website}</div>*/}
            {/*<div>{user.company.name}</div>*/}
            {/*<div>{user.company.catchPhrase}</div>*/}
            {/*<div>{user.company.bs}</div>*/}
            <button onClick={onclick}>My Posts</button>
        </div>
    );
}