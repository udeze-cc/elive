import React, { useState } from 'react';  // <-- Import useState
import { 
  Box, AppBar, Toolbar, IconButton, Typography, 
  Button, Menu, MenuItem, FormControl, InputAdornment 
} from '@mui/material';
import { Amplify } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import amplifyConfig from './aws-exports';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';  // <-- Import this
import { useNavigate } from 'react-router-dom';


Amplify.configure(amplifyConfig);

const handleSignOut = async () => {
  try {
      await Auth.signOut();
      window.location.reload(); // Reload or redirect to the sign-in page if needed
  } catch (error) {
      console.error("Error signing out: ", error);
  }
};


function CustomAppBar({ signOut, user }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const goBack = () => {
    navigate(-1); // Go back by one entry in the history stack
}

  const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
      setAnchorEl(null);
  };

  const [showSearchOptions, setShowSearchOptions] = useState(false);
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);

  const toggleSearchOptions = () => {
    setShowSearchOptions(!showSearchOptions);
    setIsSearchFormVisible(prevVisible => !prevVisible);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'green' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="back"
              sx={{ mr: 2 }}
              onClick={goBack}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="home"
              sx={{ mr: 2 }}
            >
              <HomeIcon />  
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            e-lections
          </Typography>
            
            <FormControl variant="outlined" style={{ marginBottom: '20px' }}>
                <InputAdornment position="start">
                    <IconButton
                        onClick={toggleSearchOptions}
                        aria-label="Toggle search options"
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            padding: '5px',
                        }}
                    >
                        <SearchIcon style={{ fontSize: '18px' }} />
                    </IconButton>
                </InputAdornment>
            </FormControl>
            <Button color="inherit" onClick={handleMenuOpen}>
              {user?.attributes?.family_name}
            </Button>
            
          </Toolbar>
        </AppBar>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
          }}
          transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
          }}
        >
          <MenuItem onClick={handleMenuClose} component="a" href={`/dashboard`}>Account</MenuItem>
          <MenuItem onClick={() => { handleMenuClose(); handleSignOut(); }}>Sign Out</MenuItem>
        </Menu>

      </Box>
    </>
  );
}

export default (CustomAppBar);
