import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState,useEffect } from 'react';
function GenralPanel({setTime,vehicleCount,setVehicleCount,IDS,planetData,vehicleData,isPlanetSelected,setPlanetSelected,isVehicleSelected,setVehicleSelected}){
    const [Planet, setPlanet] = useState('');
    const [vehicle,setVehicle] = useState('');
    
    // console.log(vehicleCount)
    const arrPlanet = Object.values(planetData);
    const arrVehicle = Object.values(vehicleData);
    // console.log(vehicleData)
  const handlePlanetChange = (event) => {
    // console.log(IDS)
    setPlanet(event.target.value);
    setPlanetSelected(prevState => ({
        ...prevState,
        [IDS]: event.target.value
    }));
    
    console.log(Planet)
  };
  const handleVehicleChange = (event) => {
    // console.log(IDS)
    setVehicle(event.target.value);
    setVehicleCount(prevState => ({
      ...prevState,
      [event.target.value]: vehicleCount[event.target.value] - 1
  }))
    setVehicleSelected(prevState => ({
        ...prevState,
        [IDS]: event.target.value
    }));
    
    
  };

  const isPlanetPresent = (value) => {
     for(const i in isPlanetSelected){
        if(isPlanetSelected[i] == value){
            return true;
        }
     }
     return false;
  }
  const isVehiclePresent = (value) => {
    // max_distance
    for(const i in isVehicleSelected){
       if(isVehicleSelected[i] == value && vehicleCount[value]<=0){
           return true;
       }
    }
    return false;
 }
 const isVehicleDistanceAvailable = (value)=>{
  // get the distance of current selected planet and show vehicles according to that
  let planetDist = 0;
  let vehicleDist = 0;
  // console.log(isPlanetSelected[IDS]);
  // planetData.map((item)=>{
  //  if(item.name == isPlanetSelected[IDS]){
  //   planetDist = item.distance;
  //  }
  // })
  for(let i in planetData){
    if(i.name == Planet){
      console.log(i);
      planetDist = i.distance
    }
  }
  // console.log(planetDist);
  vehicleData.map((item)=>{
    if(planetDist <= item.max_distance){
      // console.log(planetDist,item.max_distance)
      return true;
    }
  })
  return false;
 }
 
  const timeTaken =()=>{
    // let planet = isPlanetSelected[IDS];
    let vehicleSpeed = 1;
    let planetDist = 0;
    let vehicleDist = 0;
    planetData.map((item)=>{
     if(item.name == Planet){
      planetDist = item.distance;
     }
    })
    vehicleData.map((item)=>{
      if(item.name == vehicle){
        vehicleSpeed = item.speed;
        vehicleDist = item.max_distance;
      }
    })
    setTime(prevState => (prevState,(planetDist / vehicleSpeed)))
    // useEffect(()=>{
    //   // setTime(planetDist / vehicleSpeed)
      
    // },[])
  }
useEffect(()=>{
timeTaken();
},[vehicle]);
return (
     
    <div>
      
     <Box sx={{ minWidth: 120 }}>
  
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Planet</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id={IDS}
          value={Planet}
          label="Planet"
          onChange={handlePlanetChange}
        //   disabled={true}
        > 
        
         {
          arrPlanet.map((item,idx)=>{
            return(
              <MenuItem key={idx} disabled ={isPlanetPresent(item.name)} value={item.name}>{item.name}({item.distance})</MenuItem>
            )
          })
         }
          
          
        </Select>

      </FormControl>
      
    </Box>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label-2">Vehicle</InputLabel>
        <Select
          labelId="demo-simple-select-label-2"
          id={IDS}
          value={vehicle}
          label="Vehicle"
          onChange={handleVehicleChange}
        //   disabled={true}
        > 
        
         {
          arrVehicle.map((item,idx)=>{
            return(
              <MenuItem key={idx} disabled ={isVehiclePresent(item.name)} value={item.name}>{item.name}({vehicleCount[item.name]}) {item.max_distance}</MenuItem>
            )
          })
         }
         
        </Select>
      </FormControl>  
    </Box>
    
    </div>
)
}
export default GenralPanel;