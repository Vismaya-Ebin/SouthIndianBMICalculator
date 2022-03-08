import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HeightIcon from '@mui/icons-material/Height';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useEffect,useContext, useState, createContext } from "react";
import '../App.css';
export default function ViewChart() {

  const [data, setData] = useState([]);
  const endpoint="https://622733532dfa5240181721bf.mockapi.io/healthChart";
/**Data which need to show in table */
  const getDataFromApi=() => {
    fetch(endpoint,{method: 'GET'})
    .then((response) => response.json())
    .then((data)=> {
      setData(data);
      console.log("((((",data);
     
    })
  }
const deleteData = (id) => {
  alert(id)
  fetch(endpoint+"/"+id, { method: "DELETE" })
    .then((response) => response.json())
    .then((data) => {
      console.log("Before", data);
      getDataFromApi();
     
    });
}
  useEffect(() => {
    getDataFromApi();
  },[])
  const style={
    color:"yellow"
  }
  return (
    <div className="home-css">
    {data.map((item,index)=> (
    <List sx={{ width: '100%', margin:"2rem", maxWidth: 360, bgcolor: '#014421',color:"YELLOW ",fontWeight:"bold" }} key={index}>
     <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon color="primary"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Name" secondary={item.fname}  secondaryTypographyProps={{ style: style }} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon color="secondary"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Age" secondary={item.age} secondaryTypographyProps={{ style: style }} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <HeightIcon color="primary"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Height" secondary={item.height} secondaryTypographyProps={{ style: style }}/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <FitnessCenterIcon color="secondary"/> 
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Weight" secondary={item.weight} secondaryTypographyProps={{ style: style }}/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PsychologyIcon color="primary"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="BMI" secondary={item.bmi} secondaryTypographyProps={{ style:{color:"red"} }} />
      </ListItem>
      <div className="home-css">
     
      <Fab  size="small" color="secondary" aria-label="add">
      <EditIcon />
      </Fab>
      <Fab   size="small"color="secondary" aria-label="edit" onClick={()=>{deleteData(item.id)}}>
        <DeleteIcon />
       
      </Fab>
    </div>
    </List>
     
      ))}
      
    </div>
  );
}