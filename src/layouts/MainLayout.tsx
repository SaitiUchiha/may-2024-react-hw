import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            hello
            <Outlet/>
        </div>
    );
};

export default MainLayout;