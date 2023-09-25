import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, Typography } from '@mui/material';

function ResultTable() {
    return (
        <div>
            <Typography variant="h5" gutterBottom>Result Unit</Typography>
            {ResultUnit()}

            <Typography variant="h5" gutterBottom>ResultElection</Typography>
            {ResultElection()}

            <Typography variant="h5" gutterBottom>Result Ballot</Typography>
            {ResultBallot()}

            <Typography variant="h5" gutterBottom>Result Vote</Typography>
            {ResultVote()}

            <Typography variant="h5" gutterBottom>Result Staff</Typography>
            {ResultStaff()}
        </div>
    );
}

function ResultUnit() {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{unitDetail.unitName}</TableCell>
                        <TableCell>{unitDetail.unitID}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{unitData.unitName}</TableCell>
                        <TableCell>{unitData.unitID}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function ResultElection() {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{electionDetail.nameLabel}</TableCell>
                        <TableCell>{electionDetail.idLabel}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{electionData.electionName}</TableCell>
                        <TableCell>{electionData.electionID}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function ResultBallot() {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>Word</TableCell>
                        <TableCell>Figure</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ballotDetail.map((detail) => (
                        <TableRow key={detail.key}>
                            <TableCell>{detail.description}</TableCell>
                            <TableCell>{ballotData[detail.key].word}</TableCell>
                            <TableCell>{ballotData[detail.key].figure}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function ResultVote() {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{detail.partyName}</TableCell>
                        <TableCell>{detail.partyID}</TableCell>
                        <TableCell> </TableCell>
                        <TableCell> </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {voteDetail.map((detail) => {
                        const currentVote = voteData.find(vote => vote.key === detail.key) || {};
                        return (
                            <TableRow key={detail.key}>
                                <TableCell>{detail.partyName}</TableCell>
                                <TableCell>{detail.key}</TableCell>
                                <TableCell>{currentVote.votesFig}</TableCell>
                                <TableCell>{currentVote.votesWords}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function ResultStaff() {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{staffDetail.staffName}</TableCell>
                        <TableCell>{staffDetail.staffID}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{staffData.staffName}</TableCell>
                        <TableCell>{staffData.staffID}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        )
    }

export default ResultTable;


// import React from 'react';
// import {
//   useTheme,
//   useMediaQuery,
//   TableContainer,
//   Paper,
//   Table,
//   TableBody,
//   TableRow,
//   TableCell,
//   Box,
//   Typography,
//   TableHead,
//   AppBar,
//   Toolbar,
//   IconButton,
//   Button,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// function ResultsTable({ 
//     ballotDetailsConfig, 
//     unitDetails, 
//     unitData, 
//     ballotData, 
//     votesData, 
//     formData 
// }) {
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{ backgroundColor: 'green' }}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             E-lections
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>

//       <Box sx={{ m: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
//           Unit Result Table
//         </Typography>
//       </Box>

//       {/* Unit Details Table */}
//       <Box sx={{ m: 5 }}>
//         <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//           Unit Details
//         </Typography>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
//                 <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
//                 <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {unitDetails && unitDetails.map((detail) => (
//                 <TableRow key={detail.key}>
//                   <TableCell>{detail.title}</TableCell>
//                   <TableCell>{unitData[detail.key]?.name}</TableCell>
//                   <TableCell>{unitData[detail.key]?.id}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>

//       {/* Ballot Details Table */}
//       <Box sx={{ m: 5 }}>
//         <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//           Ballot Details
//         </Typography>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell align="left" sx={{ fontWeight: 'bold' }}>S/N</TableCell>
//                 {!matches && <TableCell align="center" sx={{ fontWeight: 'bold' }}>Description</TableCell>}
//                 <TableCell align="center" sx={{ fontWeight: 'bold' }}>Total in Word</TableCell>
//                 <TableCell align="right" sx={{ fontWeight: 'bold' }}>Total in Figure</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {ballotDetailsConfig && ballotDetailsConfig.map((detail) => (
//                 <TableRow key={detail.key}>
//                   <TableCell>{detail.title}</TableCell>
//                   <TableCell>{ballotData[detail.key]?.word}</TableCell>
//                   <TableCell>{ballotData[detail.key]?.figure}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>

//       {/* Votes Details Table */}
//       <Box sx={{ m: 5 }}>
//         <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//           Votes Details
//         </Typography>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell style={{ width: '15%' }}><strong>Party</strong></TableCell>
//                 <TableCell style={{ width: '10%' }}><strong>Party ID</strong></TableCell>
//                 <TableCell style={{ width: '5%' }}><strong>Votes (Fig)</strong></TableCell>
//                 <TableCell style={{ width: '40%', textAlign: 'center' }}><strong>Votes (Words)</strong></TableCell>
//                 <TableCell style={{ width: '20%' }}><strong>Agent Name</strong></TableCell>
//                 <TableCell style={{ width: '5%' }}><strong>Agent ID</strong></TableCell>
//                 <TableCell style={{ width: '5%' }}><strong>Agent Verified</strong></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {votesData && votesData.map((data) => (
//                 <TableRow key={data.partyID}>
//                   <TableCell>{data.partyName}</TableCell>
//                   <TableCell>{data.partyID}</TableCell>
//                   <TableCell>{data.votesFig}</TableCell>
//                   <TableCell align="center">{data.votesWords}</TableCell>
//                   <TableCell>{data.agentName}</TableCell>
//                   <TableCell>{data.agentID}</TableCell>
//                   <TableCell>{data.agentVerified ? "Yes" : "No"}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>

//       {/* Staff and Agent Details Table */}
//       <Box sx={{ m: 3 }}>
//       <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//         Verified By:
//         </Typography>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell align="center"><strong>Name</strong></TableCell>
//                 <TableCell align="center"><strong>ID</strong></TableCell>
//                 <TableCell align="center"><strong>Date</strong></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {/* For Staff Data */}
//               <TableRow>
//                 <Typography gutterBottom style={{ margin: 2, width: '30%' }} sx={{ fontWeight: 'bold' }}>
//                   Election Official
//                 </Typography>
//                 <TableCell align="left">{formData.staffName}</TableCell>
//                 <TableCell align="left">{formData.staffID}</TableCell>
//                 <TableCell align="left">{formData.electionDate}</TableCell>
//               </TableRow>
                      
//               {/* For Agent Data */}
//               <TableRow>
//                 <Typography gutterBottom style={{ margin: 2, width: '30%' }} sx={{ fontWeight: 'bold' }}>
//                   Observing Agent
//                 </Typography>
//                 <TableCell align="right">{formData.agentName}</TableCell>
//                 <TableCell align="right">{formData.agentID}</TableCell>
//                 <TableCell align="left">{formData.electionDate}</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </Box>
//   );
// }

// ResultsTable.defaultProps = {
//   unitDetails: [],
//   ballotDetailsConfig: [],
//   votesData: [],
//   formData: {
//     staffName: '',
//     staffID: '',
//     agentName: '',
//     agentID: '',
//     electionDate: '',
//   }
// };

// export default ResultsTable;
