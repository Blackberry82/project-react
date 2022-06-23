export default function User({item,getUser}) {

    return (
        <div>
            {item.id} {item.name}
            <button onClick={() => {
                getUser(item);
            }}>GetDetails</button>
        </div>
    );
}