import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../css/Result.css"
  function Result(){
    const [result,setResult] = useState("");
    const [timeTaken,setTimeTaken] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const data =location.state;
    
    useEffect(()=>{
        setResult(data.response);
        setTimeTaken(data.time)
    },[])
    // console.log(data);
    console.log(result.status);
    const Greetings = ()=>{
    if(result.status == "success"){
        return (
            <>
            <h2>Greetings Falcon found at {result.planet_name} planet</h2>
            <h2>Time taken {timeTaken}</h2>
            </>
        )
    }
    else{
        return(
            <h2>Falcon not found</h2>
        )
    }
    }
    const handleSubmit = () =>{
    navigate("/");    
    }
    return (
        <>
        <Header/>
        <div className='greeting'>
        <Greetings/>
        <div className="btn">
        <Button onClick={handleSubmit} variant="outlined">Play Again</Button>
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Result;