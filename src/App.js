// import React, { useState } from 'react';
// // import { Container, Paper, Tab, Tabs } from '@mui/material';
// import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
// import { Menu as MenuIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
// import { withAuthenticator } from '@aws-amplify/ui-react';
// import { Amplify, Auth } from 'aws-amplify';
// import amplifyConfig from './aws-exports';
// import ResultForm from './resultForm';



// Amplify.configure(amplifyConfig);

// // const AuthTabs = () => {
// //   const [tabIndex, setTabIndex] = useState(0);
// //     console.log('amplifyConfig: ', amplifyConfig)
// //   const handleTabChange = (event, newValue) => {
// //     setTabIndex(newValue);
// //   };

// //   return (
// //     <Container maxWidth="xs">
// //       <Paper elevation={3} style={{ padding: '20px' }}>
// //         <Tabs value={tabIndex} onChange={handleTabChange} centered>
// //           <Tab label="Sign In" />
// //           <Tab label="Sign Up" />
// //         </Tabs>
// //         {tabIndex === 0 && <signIn />}
// //         {tabIndex === 1 && (
// //           <signUp
// //             formFields={[
// //               { type: "username" },
// //               { type: "password" },
// //               { type: "email" },
// //               { type: "phone_number", label: "Phone Number", required: true },
// //               { type: "given_name", label: "First Name", required: true },
// //               { type: "family_name", label: "Last Name", required: true }
// //             ]}
// //           />
// //         )}
// //       </Paper>
// //     </Container>
// //   );
// // };

// // export default withAuthenticator(AuthTabs, { includeGreetings: true });
// function App({ signOut, user }) {
//   return (
//     <>
//     <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{ backgroundColor: 'green' }}>
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               E-lections
//             </Typography>
//             <Button onClick={signOut} color="inherit">Sign Out</Button>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     {(user.username)  ? <ResultForm/> : <div></div> }
//     {/* <ResultForm/> */}
//       {/* <h1>Hello {user.username}</h1>
//       <button onClick={signOut}>Sign out</button> */}
//     </>
//   );
// }

// export default withAuthenticator(App);

// // import React, { useState } from 'react';
// // import { TextField, Grid, Box, AppBar, Toolbar, IconButton, Typography, Button, Accordion, 
// //   AccordionSummary, AccordionDetails} from '@mui/material';
// // import { Menu as MenuIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
// // import { Auth } from 'aws-amplify';


// // const enteredOtp = ""; 
// // const endpointUrl = "https://example.com/api";
// // const setOtpModalOpen = (status) => {};

// // const unitDetail = { key: 'unitName', unitLabel: 'Unit Detail', nameLabel: 'Unit Name', idLabel: 'Unit ID' };

// // const ballotDetail = [
// //   { key: 'registeredVoters', description: 'Registered Voters', wordLabel: 'Total Registered Voters in Words', figureLabel: 'Registered Voters (Fig)' },
// //   { key: 'accreditedVoters', description: 'Accredited Voters', wordLabel: 'Total Accredited Voters in Words', figureLabel: 'Accredited Voters (Fig)' },
// //   { key: 'issuedBallots', description: 'Issued Ballot Papers', wordLabel: 'Total Issued Ballot Papers in Words', figureLabel: 'Total Issued Ballots (Fig)' },
// //   { key: 'usedBallots', description: 'Used Ballot Papers', wordLabel: 'Total Used Ballot Papers in Words', figureLabel: ' Total Used Ballots (Fig)' },
// //   { key: 'unusedBallots', description: 'Unused Ballot Papers', wordLabel: 'Total Unused Ballot Papers in Words', figureLabel: 'Total Unused Ballots (Fig)' },
// //   { key: 'spoiltBallots', description: 'Spoilt Ballot Papers', wordLabel: 'Total Spoilt Ballot Papers in Words', figureLabel: 'Total Spoilt Ballots (Fig)' },
// //   { key: 'ballotRangeStart', description: 'Ballot Number (Start)', wordLabel: 'Ballot Serial Number Start in Words', figureLabel: 'Ballot S/N Start (Fig)' },
// //   { key: 'ballotRangeEnd', description: 'Ballot Number (End)', wordLabel: 'Ballot Serial Number End in Words', figureLabel: 'Ballot S/N End (Fig)' },
// //   { key: 'rejectedVotes', description: 'Rejected Votes', wordLabel: 'Total Rejected Votes in Words', figureLabel: 'Total Rejected Votes (Fig)' },
// //   { key: 'validVotes', description: 'Valid Votes', wordLabel: 'Total Valid Votes in Words', figureLabel: 'Total Valid Votes (Fig)' },
// // ];
  
// // const voteDetail = [
// //   { key: 'PA1', partyName: 'Alliance Party' },
// //   { key: 'PC1', partyName: 'Congress Party' },
// //   { key: 'PD1', partyName: 'Democratic Party' }
// // ];

// // function ResultForm() {
// //   const [isPreview, setIsPreview] = useState(false);
  
// //   const handlePreviewClick = () => {
// //     setIsPreview(true);
// //   }

// //   const handleBackClick = () => {
// //     // Go back to the form
// //     setIsPreview(false);
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     try {
// //         const user = await Auth.currentAuthenticatedUser();
// //         await Auth.setupTOTP(user);
// //         setOtpModalOpen(true);
// //     } catch (error) {
// //         console.error("Error setting up TOTP", error);
// //     }
// //   }

// //   const handleOtpSubmit = async () => {
// //     try {
// //         const user = await Auth.currentAuthenticatedUser();
// //         const isValid = await Auth.verifyTotpToken(user, enteredOtp);

// //         if (isValid) {
// //             setOtpModalOpen(false);

// //             const formData = {
// //                 unitData,
// //                 ballotData,
// //                 voteData,
// //                 staffData
// //                 // ... any other form fields ...
// //             };
            
// //             const response = await fetch(endpointUrl, {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                 },
// //                 body: JSON.stringify(formData),
// //             });
  
// //             if (!response.ok) {
// //                 throw new Error('Network response was not ok');
// //             }
  
// //             const responseData = await response.json();
// //             console.log('Data stored successfully:', responseData);
// //             // Reset data after successful submission
// //             setUnitData(unitData);
// //             setBallotData(ballotData);
// //             setVoteData(voteData);
// //             setStaffData(staffData);
// //         } else {
// //             alert("Invalid OTP. Please try again.");
// //         }
// //     } catch (error) {
// //       console.error("Error verifying OTP", error);
// //     }
// //   }


// //   const [unitData, setUnitData] = useState({
// //     unitName: '',
// //     unitID: ''
// //   });

// //   const [ballotData, setBallotData] = useState({
// //     registeredVoters: { word: '', figure: '' },
// //     accreditedVoters: { word: '', figure: '' },
// //     issuedBallots: { word: '', figure: '' },
// //     usedBallots: { word: '', figure: '' },
// //     unusedBallots: { word: '', figure: '' },
// //     spoiltBallots: { word: '', figure: '' },
// //     ballotRangeStart: { word: '', figure: '' },
// //     ballotRangeEnd: { word: '', figure: '' },
// //     rejectedVotes: { word: '', figure: '' },
// //     validVotes: { word: '', figure: '' },
// //   });
  
// //   const [voteData, setVoteData] = useState([
// //     { key: 'PA1', votesFig: '', votesWords: '' },
// //     { key: 'PC1', votesFig: '', votesWords: '' },
// //     { key: 'PD1', votesFig: '', votesWords: '' }
// //   ]);

// //   const [staffData, setStaffData] = useState({
// //     staffName: '',
// //     staffID: '',
// //     electionDate: null
// //   });

// //   const handleStaffInputChange = (field, value) => {
// //     setStaffData(prevData => ({ ...prevData, [field]: value }));
// //   };

// //   function handleInputChange(dataType, key, subKey, value) {
// //     if (dataType === "unitData") {
// //       setUnitData(prevState => ({
// //         ...prevState,
// //         [key]: value
// //       }));
// //     } else if (dataType === "ballotData") {
// //       setBallotData(prev => ({
// //         ...prev,
// //         [key]: { ...prev[key], [subKey]: value }
// //       }));
// //     } else if (dataType === "voteData") {
// //       setVoteData(prev => {
// //         const newData = [...prev];
// //         const itemIndex = newData.findIndex(item => item.key === key);
// //         if (itemIndex !== -1) {
// //           newData[itemIndex][subKey] = value;
// //         }
// //         return newData;
// //       });
// //     }
// //   }
  
// //   function UnitComponent({ unitLabel, nameLabel, idLabel, nameData, idData, onChangeName, onChangeId }) {
// //     return (
// //       <Grid container spacing={2} alignItems="center">
// //         <Grid item xs={12} sm={4} md={3}>
// //           <Typography variant="h6" sx={{ margin: 2, fontWeight: 'bold' }}>{unitLabel}</Typography>
// //         </Grid>
// //         <Grid item xs={12} sm={6} md={7}>
// //           <TextField fullWidth variant="outlined" label={nameLabel} value={nameData} onChange={e => onChangeName(e.target.value)} sx={{ marginBottom: 2 }} />
// //         </Grid>
// //         <Grid item xs={12} sm={2} md={2}>
// //             <TextField fullWidth variant="outlined" label={idLabel} value={idData} onChange={e => onChangeId(e.target.value)} sx={{ marginBottom: 2 }} />
// //         </Grid>
// //       </Grid>
// //     );
// // }

// //   function BallotComponent({ description, wordLabel, figureLabel, wordData, figureData, onWordChange, onFigureChange }) {
// //     return (
// //       <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row' }}>
// //         <Grid container spacing={4}>
// //           <Grid item xs={12} sm={4} md={3}>
// //             <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>{description}</Typography> 
// //           </Grid>
// //           <Grid item xs={12} sm={6} md={7}>
// //             <TextField
// //               fullWidth
// //               variant="outlined"
// //               label={wordLabel}
// //               value={wordData}
// //               onChange={e => onWordChange(e.target.value)}
// //               sx={{ marginBottom: 2 }}
// //             />
// //           </Grid>
// //           <Grid item xs={12} sm={2} md={2}>
// //             <TextField
// //               fullWidth
// //               variant="outlined"
// //               label={figureLabel}
// //               value={figureData}
// //               onChange={e => onFigureChange(e.target.value)}
// //               sx={{ marginBottom: 2 }}
// //             />
// //           </Grid>
// //           </Grid>
// //       </Box>
// //     );
// //   }

// //   function VoteComponent({ partyName, partyID, votesFig, votesWords, onInputChange }) {
// //     return (
// //       <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row', marginBottom: 2 }}>
// //         <Grid container spacing={1}>
// //           <Grid item xs={12} sm={6} md={2}>
// //             <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>{partyName}</Typography>
// //           </Grid>
// //           <Grid item xs={12} sm={6} md={1}>
// //             <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>{partyID}</Typography>         
// //           </Grid>
// //           <Grid item xs={12} sm={6} md={2}>
// //             <TextField fullWidth variant="outlined" label="Votes in Fig" value={votesFig} onChange={e => onInputChange('votesFig', e.target.value)} />
// //           </Grid>
// //           <Grid item xs={12} sm={6} md={7}>
// //             <TextField fullWidth variant="outlined" label="Votes in Words" value={votesWords} onChange={e => onInputChange('votesWords', e.target.value)} />
// //           </Grid>
// //         </Grid>
// //       </Box>
// //     );
// //   }

// //   if (isPreview) {
// //     return (
// //       <>
// //         {/* Display your data, implement this based on your needs */}
// //         <Box>{JSON.stringify(unitData)}</Box>
// //         <Box>{JSON.stringify(ballotData)}</Box>
// //         <Box>{JSON.stringify(voteData)}</Box>
// //         <Box>{JSON.stringify(staffData)}</Box>

// //         <Button variant="contained" color="secondary" onClick={handleBackClick}>
// //           Back
// //         </Button>

// //         <Button variant="contained" color="primary" onClick={handleSubmit}>
// //           Submit
// //         </Button>
// //       </>
// //     );
// //   } else {

// //   return (
// //     <>
// //       <Box sx={{ flexGrow: 1 }}>
// //         <AppBar position="static" sx={{ backgroundColor: 'green' }}>
// //           <Toolbar>
// //             <IconButton
// //               size="large"
// //               edge="start"
// //               color="inherit"
// //               aria-label="menu"
// //               sx={{ mr: 2 }}
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //               E-lections
// //             </Typography>
// //             <Button color="inherit">Sign Out</Button>
// //           </Toolbar>
// //         </AppBar>
// //       </Box>

// //       <Box sx={{ m: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// //         <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
// //           Unit Result Submission Form
// //         </Typography>
// //       </Box>

// //       <Box sx={{ m: 2 }}>
// //         <UnitComponent
// //           unitLabel={unitDetail.unitLabel} 
// //           nameLabel={unitDetail.nameLabel}
// //           idLabel={unitDetail.idLabel}
// //           nameData={unitData.unitName}
// //           idData={unitData.unitID}
// //           onChangeName={value => handleInputChange("unitData", "name", null, value)}
// //           onChangeId={value => handleInputChange("unitData", "id", null, value)}
// //         />
// //       </Box>



// //         <Accordion sx={{ marginBottom: 2 }}>
// //           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
// //             <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Expand Ballot Details</Typography>
// //           </AccordionSummary>
// //           <AccordionDetails>
// //           {ballotDetail.map(detail => (
// //             <BallotComponent
// //               key={detail.key}
// //               description={detail.description}
// //               wordLabel={detail.wordLabel}
// //               figureLabel={detail.figureLabel}
// //               wordData={ballotData[detail.key].word}
// //               figureData={ballotData[detail.key].figure}
// //               onWordChange={(value) => handleInputChange("ballotData", detail.key, "word", value)}
// //               onFigureChange={(value) => handleInputChange("ballotData", detail.key, "figure", value)}
// //             />
// //           ))}
// //           </AccordionDetails>
// //         </Accordion>

// //         <Accordion sx={{ marginBottom: 2 }}>
// //           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
// //             <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Votes Summary</Typography>
// //           </AccordionSummary>
// //           <AccordionDetails>
// //           {voteDetail.map((detail, index) => (
// //             <VoteComponent 
// //               key={detail.key} 
// //               partyName={detail.partyName}
// //               partyID={detail.key}
// //               votesFig={voteData[index].votesFig}
// //               votesWords={voteData[index].votesWords}
// //               onInputChange={(field, value) => handleInputChange("voteData", detail.key, field, value)}
// //             />
// //           ))}
// //           </AccordionDetails>
// //         </Accordion>


// //         <Box display="flex" flexDirection="column" alignItems="center" mt={3} m={2}>
// //         <Grid container spacing={1} alignItems="center">
// //             <Grid item xs={12} sm={1}>
// //                 <Box>I</Box>
// //             </Grid>
// //             <Grid item xs={12} sm={3}>
// //                 <Box mx={1}>
// //                     <TextField 
// //                         variant="outlined"
// //                         name="staffName" 
// //                         id="staffName" 
// //                         label="Polling Officer's Name" 
// //                         required 
// //                     />
// //                 </Box>
// //             </Grid>
// //             <Grid item xs={12} sm={1}>
// //                 <Box>with staff ID</Box>
// //             </Grid>
// //             <Grid item xs={12} sm={3}>
// //                 <Box mx={1}>
// //                     <TextField 
// //                         variant="outlined"
// //                         name="staffID" 
// //                         id="staffID" 
// //                         label="Staff ID" 
// //                         required 
// //                     />
// //                 </Box>
// //             </Grid>
// //             <Grid item xs={12} sm={1}>
// //                 <Box>today,</Box>
// //             </Grid>
// //             <Grid item xs={12} sm={3}>
// //                 <Box mx={1}>
// //                     <TextField 
// //                         variant="outlined"
// //                         type="datetime-local" 
// //                         name="electionDate" 
// //                         id="electionDate" 
// //                         label="Election Date" 
// //                         InputLabelProps={{
// //                           shrink: true,
// //                         }}
// //                         required 
// //                     />
// //                 </Box>
// //             </Grid>
// //             <Grid item xs={12}>
// //                 <Box>hereby certify that the information contained in this form is a true and accurate account of votes cast in this polling unit. The election was CONTESTED/NOT CONTESTED.</Box>
// //             </Grid>
// //         </Grid>

// //           <Box>
// //             <Box m={3} >
// //                 <Button variant="contained" color="primary" onClick={handlePreviewClick}>
// //                   Preview
// //                 </Button>
// //             </Box>
// //         </Box>
// //       </Box>
// //     </>
// //   );
// // }}

// // export default ResultForm;

import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ManageElection from './manageElection';
import ManageStaff from './manageStaff';
import ManageParty from './manageParty';
import ManageUnit from './manageUnit';
import ManagePosting from './managePosting';
import ManageResultForm from './manageResultForm';
import { SnackbarProvider } from './customBar';
import ManageBallot from './manageBallot';
import ManageResult from './manageResult';
import ManageVote from './manageVote';

const drawerWidth = 260;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

function AdminPage() {   
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
    setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleMenuClick = (componentName) => {
        setSelectedComponent(componentName);
    };

    const renderSelectedComponent = () => {
        switch (selectedComponent) {
            case 'ManageElection':
                return (
                    <SnackbarProvider>
                        <ManageElection />
                    </SnackbarProvider>
                );
            case 'ManageParty':
                return (
                    <SnackbarProvider>
                        <ManageParty />
                    </SnackbarProvider>
                );
            case 'ManageStaff':
                return (
                    <SnackbarProvider>
                        <ManageStaff />
                    </SnackbarProvider>
                );
            // case 'ManageAgent':
            //     return (
            //         <SnackbarProvider>
            //             <ManageAgent />
            //         </SnackbarProvider>
            //     );
            case 'ManageUnit':
                return (
                    <SnackbarProvider>
                        <ManageUnit />
                    </SnackbarProvider>
                );
            case 'ManagePosting':
                    return (
                        <SnackbarProvider>
                            <ManagePosting />
                        </SnackbarProvider>
                    );
            case 'ManageBallot':
                return (
                    <SnackbarProvider>
                        <ManageBallot />
                    </SnackbarProvider>
                );
            case 'ManageResultForm':
                    return (
                        <SnackbarProvider>
                            <ManageResultForm />
                        </SnackbarProvider>
                    );
            case 'ManageResult':
                    return (
                        <SnackbarProvider>
                            <ManageResult />
                        </SnackbarProvider>
                    );
            case 'ManageVote':
                    return (
                        <SnackbarProvider>
                            <ManageVote />
                        </SnackbarProvider>
                    );
            default:
                return null;  
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ bgcolor: 'green' }}>
                <Toolbar>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                        E-lections AdminPage
                    </Typography>
                    <IconButton
                        color="inherit" // changed to inherit so it takes color from parent AppBar
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Main open={open}>
                <DrawerHeader />
                {renderSelectedComponent()}
            </Main>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                          width: drawerWidth,
                        },
                      }}
                      variant="persistent"
                      anchor="right"
                      open={open}
                >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                {[
                    { name: 'Manage Election', component: 'ManageElection' },
                    { name: 'Manage Party', component: 'ManageParty' },
                    { name: 'Manage Staff', component: 'ManageStaff' },
                    { name: 'Manage Agent', component: 'ManageAgent' },
                    { name: 'Manage Unit', component: 'ManageUnit' },
                    { name: 'Manage Posting', component: 'ManagePosting' },
                    { name: 'Manage Ballot', component: 'ManageBallot' },
                    { name: 'Manage Result Form', component: 'ManageResultForm' },
                    { name: 'Manage Result', component: 'ManageResult' },
                    { name: 'Manage Vote', component: 'ManageVote' },
                ].map((item, index) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton onClick={() => handleMenuClick(item.component)}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    </Box>
    </Box>
);
}

export default AdminPage;

