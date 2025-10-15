import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
// import { Outlet } from 'react-router';

import { RouterProvider, Outlet, useNavigation, useLocation } from "react-router";


export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
}

export const Loader = () => {
    return (
        <div className="nav-loading-overlay text-3xl text-white" aria-hidden="true">
            <div className="nav-spinner" />
            Loading Please wait...
        </div>
    )
}

export const Loader2 = () => {
    return (
        <div className="nav-loading text-3xl text-gray-500 mb-100" aria-hidden="true">
            <div className="nav-spinner" />
            Loading Please wait...
        </div>
    )
}

export function NavigationLoading() {
    const nav = useNavigation();
    const loading = nav.state !== "idle"; // "loading" | "submitting" | "idle"
    if (!loading) return null;
    return (
        <Loader />
    );
}

const Main = () => {
    return (
        <>
            <NavigationLoading />
            <ScrollToTop />
            <NavBar />
            <Outlet />
            <Footer />

        </>
    );
};

export default Main;