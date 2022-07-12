import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <h1>Main</h1>
            <ul>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
            </ul>
        </div>
    );
}