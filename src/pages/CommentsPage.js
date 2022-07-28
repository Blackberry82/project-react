import {Outlet} from "react-router";

import CommentsComponent from "../components/comments/CommentsComponent";

export default function CommentsPage() {
    return (
        <div>
            <Outlet/>
            <CommentsComponent/>
        </div>
    );
}