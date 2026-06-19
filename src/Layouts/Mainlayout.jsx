import React from "react";
import Footer from "../components/footer"
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;