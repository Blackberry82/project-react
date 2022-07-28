import {Outlet} from "react-router";

import Header from "../components/header/Header";

export default function MainLayout() {
    return (
        <div>
            <Header/>
            <hr/>
            <Outlet/>

        </div>
    );
}