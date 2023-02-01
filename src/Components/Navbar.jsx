import React from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
 

function Navbar(props) {

    const cookies = new Cookies();
    let jwt = cookies.get('jwt');

    let authState = jwt || false;

    function handleLogout(){
        localStorage.setItem("login" , false);
    }
    
    console.log(authState);
    return (
        <>
            <nav className='outer_navbar'>
                <div><h1><NavLink to='/'>Instagram</NavLink></h1></div>

                <div>
                    <ul>
                        {
                            !authState ? <>
                            <li>
                            <NavLink to='/post'>Posts</NavLink>
                            </li>
                            <li>
                            <NavLink to='/login'>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to='/signup'>Signup</NavLink>
                        </li>
                            </> : <button onClick={handleLogout}>Logout</button>
                        }
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;