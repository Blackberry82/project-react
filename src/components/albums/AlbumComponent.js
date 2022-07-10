export default function AlbumComponent({album}) {
    const {userId, id, title} = album;
    return (
        <div>
            <div>userId - {userId}</div>
            <div>id - {id}</div>
            <h4>{title}</h4>
            <hr/>
        </div>
    );
}