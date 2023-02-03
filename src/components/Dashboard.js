
import { useState,useEffect } from "react";
import GenralPanel from "./GenralPanel"
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import "../css/Dashboard.css"
const planetUrl = "https://findfalcone.herokuapp.com/planets";
const vehicleUrl = "https://findfalcone.herokuapp.com/vehicles";
function Dashboard(){
    const [planetData,setPlanetData] = useState([]);
    const [vehicleData,setVehicleData] = useState([{name: 'Space pod', total_no: 2, max_distance: 200, speed: 2},
    {name: 'Space rocket', total_no: 1, max_distance: 300, speed: 4},
    {name: 'Space shuttle', total_no: 1, max_distance: 400, speed: 5},
    {name: 'Space ship', total_no: 2, max_distance: 600, speed: 10}]);
    const [vehicleCount,setVehicleCount] = useState({"Space pod": 2, "Space rocket": 1, "Space shuttle": 1, "Space ship": 2});
    const [isPlanetSelected,setPlanetSelected] = useState({ "ID-1" : 1,"ID-2" : 2,"ID-3" : 3});
    const [isVehicleSelected,setVehicleSelected] = useState({ "ID-1" : 1,"ID-2" : 2,"ID" : 3});
    const [time,setTime] = useState(0);
    let resultData = {"response":"abc","time":"25"}
    const navigate = useNavigate();
    const fetchData = async()=>{
      try{
        const responsePlanet = await axios.get(planetUrl);
        const dataPla = await responsePlanet.data;
        setPlanetData(dataPla);
        const responseVehicle = await axios.get(vehicleUrl);
        const dataVeh = await responseVehicle.data;
        setVehicleData(dataVeh);
      }
      catch(er){
        console.log(er)
      }
        
    }
    const handleSubmit = async() => {
        
        let planets = []
        let vehicles = []
        let token ="";
        let URL = "https://findfalcone.herokuapp.com/token";
        try{
         let response = await axios({
            method: "POST",
            url: URL,
            headers: {
              Accept: "application/json",
            },
            body: {},
          });
          
          token = response.data.token;
          for(let i in isPlanetSelected){
        planets.push(isPlanetSelected[i])
             }
          for(let i in vehicleCount){
           vehicles.push(i);
          }
        //  console.log(planets,vehicles)
         let result = await axios({
            method: "post",
            url: "https://findfalcone.herokuapp.com/find",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            data: {
              token: token,
              planet_names:planets,
              vehicle_names: vehicles,
            },
          });
        // console.log(result.data);
        resultData = {"response":result.data,"time":time}
        }
        catch(er){
          alert("Please select planets and vehicles");
        }
        navigate("/result",{state:resultData});
        
    }
    useEffect(()=>{
     fetchData();
    },[]);
    // useEffect(()=>{
    //   console.log(isPlanetSelected) 
    // },[isPlanetSelected])
    return(
        <>
        <div className="headPanel">
        <h3>Select the compatable vehicle for selected planet</h3>
        <h4>Time Taken : {time}</h4>
        </div>
        <div className="genralPanel">
        <h3>destination 1 :</h3>
        <GenralPanel IDS ="ID-1" isVehicleSelected={isVehicleSelected} setVehicleSelected={setVehicleSelected} vehicleData={vehicleData} planetData={planetData} setPlanetSelected={setPlanetSelected} isPlanetSelected={isPlanetSelected} vehicleCount={vehicleCount} setVehicleCount={setVehicleCount} time={time} setTime={setTime}/>
        <h3>destination 2 :</h3>
        <GenralPanel IDS ="ID-2" isVehicleSelected={isVehicleSelected} setVehicleSelected={setVehicleSelected} vehicleData={vehicleData} planetData={planetData} setPlanetSelected={setPlanetSelected} isPlanetSelected={isPlanetSelected} vehicleCount={vehicleCount} setVehicleCount={setVehicleCount} time={time} setTime={setTime}/>
        <h3>destination 3 :</h3>
        <GenralPanel IDS ="ID-3" isVehicleSelected={isVehicleSelected} setVehicleSelected={setVehicleSelected} vehicleData={vehicleData} planetData={planetData} setPlanetSelected={setPlanetSelected} isPlanetSelected={isPlanetSelected} vehicleCount={vehicleCount} setVehicleCount={setVehicleCount} time={time} setTime={setTime}/>
        <h3>destination 4 :</h3>
        <GenralPanel IDS ="ID-4" isVehicleSelected={isVehicleSelected} setVehicleSelected={setVehicleSelected} vehicleData={vehicleData} planetData={planetData} setPlanetSelected={setPlanetSelected} isPlanetSelected={isPlanetSelected} vehicleCount={vehicleCount} setVehicleCount={setVehicleCount} time={time} setTime={setTime}/>
        </div>
        <div className="dashboard-btn">
        <Button onClick={handleSubmit} variant="outlined" color="success">Send Army</Button>
        </div>
        </>
    )
}

export default Dashboard;