import React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import amplifyConfig from './aws-exports';
import HomeDashboard from './home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

Amplify.configure(amplifyConfig);

function App({ signOut, user }) {
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
    >
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          E-lections
        </Typography>
        <Button onClick={signOut} color="inherit">Sign Out</Button>
      </Toolbar>
    </AppBar>
  </Box>
    {(user.username)  ? <HomeDashboard/> : <div></div> }
    </>
  );
}

export default withAuthenticator(App);

