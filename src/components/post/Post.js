
export default function Post({item, getPost}) {

    return (
        <div>
            {item.id} {item.title}
            <button onClick={() => {getPost(item);}}>Get post</button>
        </div>
    );
}