import {Outlet} from "react-router-dom";

import Header from "../components/header/Header";

export default function MainLayout() {
    return (
        <div>
            <Header/>
            <h2>Content</h2>
            <Outlet/>
        </div>
    );
}