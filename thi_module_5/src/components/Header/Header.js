import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import "./Header.css";
function Header(){
    return(
        <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Thi Module 5
          </Typography>
          <Button color="inherit">Đăng nhập</Button>        
        </Toolbar>
      </AppBar>
    </Box>   
        </>
    )
}
export default Header;
