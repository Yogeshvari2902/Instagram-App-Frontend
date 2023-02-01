import React  , {useState,useEffect}from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import Cookies from 'universal-cookie';
function Home() {

    const [data , setData] = useState([]);
    const cookies = new Cookies();
    const jwt = cookies.get('jwt')

    async function getData(){
            axios.post('' , {
                token:jwt
            }).then((res)=>{
                
            }).catch((Err)=>{
                console.log(Err);
            })
    }
    
    useEffect(() => {
      return () => { 
      };
    }, [])

    return (
        <>
            <Navbar />
            <div className="outer_home">
                    <h3>
                        Total Post = 10
                    </h3>
                    <div className="outer_post_div">
                            <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, cupiditate?</p> 
                            <div className='buttons_div'>
                                <button>📝</button>
                                <button>❌</button>
                            </div>
                            </div>
                            
                    </div>
            </div>
        </>
    );
}

export default Home;