import {useEffect, useState} from "react";

import {albumsService} from "../../services";
import AlbumComponent from "./AlbumComponent";

export default function AlbumsComponent() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService().then(({data}) => setAlbums(data))
    }, []);

    return (
        <div>
            {
                albums.map(album => <AlbumComponent key={album.id} album={album}/>)
            }
        </div>
    );
}