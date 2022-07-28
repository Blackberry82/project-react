export default function AlbumComponent({album}) {
    return (
        <div>
                <div>id - {album.id}</div>
                <div>userId - {album.userId}</div>
                <h2>{album.title}</h2>
            <hr/>
        </div>
    );
}