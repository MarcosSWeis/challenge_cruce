import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from '../components/footer/Footer';
import AlertTouch from '../components/AlertTouch';
import Home from '../components/home/Home';
import NavBar from '../components/navBar/NavBar';
import Search from '../components/Search';
import PageHome from '../pages/home/PageHome';
import PublicRoutes from '../routes/PublicRoutes';

interface IAppRouterProps {
}

const AppRouter: React.FunctionComponent<IAppRouterProps> = () => {
    return (
        <Router>
            <NavBar />
            <AlertTouch />
            <Search />
            <Routes>
                <Route path='/*' element={<PublicRoutes />} />
            </Routes>
            <Footer />
        </Router>

    );
}

export default AppRouter;