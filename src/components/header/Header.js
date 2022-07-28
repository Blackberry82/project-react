import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <h2>Main Menu</h2>
            <ol>
                <li><Link to={'albums'}>Albums</Link></li>
                <li><Link to={'comments'}>Comments</Link></li>
                <li><Link to={'todos'}>Todos</Link></li>
            </ol>
        </div>
    );
}