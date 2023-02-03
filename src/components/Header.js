import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Header() {
  return (
    <div className ="appbar">
    <Box sx={{ flexGrow: 1 }} >
      <AppBar style={{backgroundColor:"rgb(156, 150, 150)"}} position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Finding Falcon
          </Typography>
          <Button color="inherit">RESET</Button>
          <Button color="inherit">GEEK TRUST HOME</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

export default Header;