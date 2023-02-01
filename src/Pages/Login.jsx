import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
 

function Signup() {

    const email = useRef();
    const password = useRef();
    const cookies = new Cookies();

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        let userDetails = {
            email:email.current.value,
            password: password.current.value
        }


         

        axios.post('http://localhost:8081/users/login' , userDetails)
        .then((res)=>{
            cookies.set('jwt' , res.data);
            alert(res.data);
            // console.log(res)
            navigate('/');
        }).catch((err)=>{
            console.log("error occured");
            console.log(err);
        })
    }


    return (
        <>
        <Navbar />
            <div className="outer_signup_div">
                    <div className="inner_signup_div">
                            <form onSubmit={handleSubmit}>
                                <h1>Fill Your Details</h1>
                                <input type="email"  placeholder='Email' ref={email} required/>
                                
                               

                                <input type="password" ref={password} required placeholder='Enter Password'/>

                                <input type="submit" value="Register" />
                            </form>
                    </div>
            </div>
        </>
    );
}

export default Signup;