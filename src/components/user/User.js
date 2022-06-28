export default function User({item, getUserId}) {
    return (
        <div>
            <div>{item.id}</div>
            <h2>{item.name}</h2>
            <h3>{item.username}</h3>
            <div>{item.email}</div>
            <div>{item.address.city}</div>
            <div>{item.address.street}</div>
            <div>{item.address.suite}</div>
            <div>{item.address.zipcode}</div>
            <div>{item.address.geo.lat}</div>
            <div>{item.address.geo.lng}</div>
            <div>{item.phone}</div>
            <div>{item.website}</div>
            <div>{item.company.name}</div>
            <div>{item.company.catchPhrase}</div>
            <div>{item.company.bs}</div>
            <button onClick={() => {getUserId(item.id)}}>My Posts</button>
        </div>
    );
}