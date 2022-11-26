import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import SharedNavbar from '../components/Shared/SharedNavbar';


const Main = () => {
    return (
        <div>
            <SharedNavbar></SharedNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
