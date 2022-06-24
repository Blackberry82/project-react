export default function UserDetails({user}) {
    return (
        <div>
            <div>{user.id}</div>
            <h2>{user.name}</h2>
            <h3>{user.username}</h3>
            <div>{user.email}</div>
            <div>{user.address.city}</div>
            <div>{user.address.street}</div>
            <div>{user.address.suite}</div>
            <div>{user.address.zipcode}</div>
            <div>{user.address.geo.lat}</div>
            <div>{user.address.geo.lng}</div>
            <div>{user.phone}</div>
            <div>{user.website}</div>
            <div>{user.company.name}</div>
            <div>{user.company.catchPhrase}</div>
            <div>{user.company.bs}</div>
        </div>
    );
}
