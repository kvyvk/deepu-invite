import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';





export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background: "#032f5d"}}>
        <Toolbar>
         
     

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} className="w-100 d-flex justify-content-center align-items-center" style={{cursor:"pointer"}} 
          >
            <b>ఉపనయన ఆహ్వానం</b>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
