import React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { Menu as MenuIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
// import { useHistory } from "react-router-dom";


function HomeScreen() {
    // const history = useHistory();
    // const navigateTo = () => history.push('/Account');//eg.history.push('/login');
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'green' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    E-lections
                    </Typography>
                    <a style={{color: "red", textDecoration: "none", color: "white"}} href={`/dashboard`}>Account</a>
                    {/* <Button onClick={navigateTo} color="inherit">Account</Button> */}
                </Toolbar>
            </AppBar>
            <Box sx={{ flexGrow: 1 }}>
                Welcome
            </Box>
        </>
    )
}

export default HomeScreen;