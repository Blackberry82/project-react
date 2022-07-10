import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <h1>Main</h1>
    <ul>
        <li><Link to={'todos'}>Todos</Link></li>
        <li><Link to={'albums'}>Albums</Link></li>
        <li><Link to={'comments'}>Comments</Link></li>
    </ul>

        </div>
    );
}