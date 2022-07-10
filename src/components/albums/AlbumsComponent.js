import {useEffect, useState} from "react";

import {getAlbums} from "../../services";
import AlbumComponent from "./AlbumComponent";

export default function AlbumsComponent() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
       getAlbums().then(value => setAlbums([...value.data]))
    }, []);
    return (
        <div>
            {
                albums.map(album => <AlbumComponent key={album.id} album={album}/>)
            }
        </div>
    );
}