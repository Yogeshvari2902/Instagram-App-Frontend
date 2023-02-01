import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {

    const name = useRef();
    const email = useRef();
    const gender = useRef();
    const password = useRef();

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        let userDetails = {
            name:name.current.value,
            email:email.current.value,
            gender:gender.current.value,
            password: password.current.value
        }
        console.log("about to send");
        axios.post('http://localhost:8081/users/register' , userDetails)
        .then((res)=>{
            navigate('/login');
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
                                <input type="text"  placeholder='Full Name' ref={name} required/>
                                <input type="email"  placeholder='Email' ref={email} required/>
                                
                                <select ref={gender}>
                                    <option value="Male"> Male </option>
                                    <option value="Female"> Female </option>
                                </select>

                                <input placeholder='Password' type="password" ref={password} required/>

                                <input type="submit" value="Register" />
                            </form>
                    </div>
            </div>
        </>
    );
}

export default Signup;