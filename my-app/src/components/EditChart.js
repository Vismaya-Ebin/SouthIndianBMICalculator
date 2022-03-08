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

export default function EditChart() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',color:"black",fontWeight:"bold" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon color="primary"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Name" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon color="secondary"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Age" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <HeightIcon color="primary"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Height" secondary="July 20, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <FitnessCenterIcon color="secondary"/> 
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Weight" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PsychologyIcon color="primary"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="BMI" secondary="Jan 7, 2014" />
      </ListItem>
    </List>
  );
}