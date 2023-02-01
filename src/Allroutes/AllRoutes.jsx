import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Posts from '../Pages/Posts';
function AllRoutes() {
    return (
        <>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/signup' element={<Signup />}/>
                    <Route path='/post' element={<Posts />}/>
                </Routes>
        </>
    );
}

export default AllRoutes;