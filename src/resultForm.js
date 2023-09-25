import React, { useState } from 'react'; 
import {Grid, Button, Typography, TextField, Box}  from '@mui/material';
import './App.css';

function ResultForm() {
  const [partyName, setPartyName] = useState('');
  const [voteCount, setVoteCount] = useState('');
  const [pollingCentre, setPollingCentre] = useState('');
  const [officerID, setOfficerID] = useState('');
  const [electionID, setElectionID] = useState('');
  const [electionDate, setElectionDate] = useState('');
  
  const [isPreview, setIsPreview] = useState(false);
  
  const handlePreviewClick = () => {
    setIsPreview(true);
  }

  const handleBackClick = () => {
    setIsPreview(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!partyName) return;
    if (!voteCount) return;
    if (!pollingCentre) return;
    if (!officerID) return;
    if (!electionID) return;
    if (!electionDate) return;
    alert('Submitting Form')
    const body = {partyName, voteCount, pollingCentre, officerID, electionDate, electionID}
    
  }

  if (isPreview) {
    return (
  <>
    <Box className="box">
      <Box className='resultform-header'>
        <Typography variant="h4" gutterBottom className='result-header-typo'>
          Unit Result Preview Form
        </Typography>
      </Box>

      <Box className='box'>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="result-input">Election ID</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
           {electionID}
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="result-input">Polling Centre</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
           {pollingCentre}
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="result-input">Party Name</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
           {partyName}
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="result-input">Vote Count</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
           {voteCount}
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="result-input">Officer ID</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
           {officerID}
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="result-input">Election Date</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
           {electionDate}
          </Grid>
        </Grid>

        <Grid>
          <Button className="view-result-button" variant="contained" style={previewButton} onClick={handleBackClick}>
            Back
          </Button>

          <Button className="view-result-button" variant="contained" style={previewButton} onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>

      </Box>

    </Box>
  </>
    );
  } else {

  return (
    <Box className='box'>
      <Box className='resultform-header'>
        <Typography variant="h4" gutterBottom className='result-header-typo'>
          Unit Result Submission Form
        </Typography>
      </Box>

        <Grid container spacing={2} >
            <Grid item xs={12} md={6}>
              <Typography variant="h5" className="result-input">Election ID :</Typography>
            </Grid>
            <Grid>
              <TextField id="ElectionID" fullWidth label="ElectionID" className="result-input" variant="outlined" value={electionID} onChange={e => setElectionID(e.target.value)} />
          </Grid>
        </Grid>

        <Grid container spacing={1} >
          <Grid item spacing={1} xs={12} md={6}>
            <Typography variant="h5" className="result-input"> Polling Centre :</Typography>
          </Grid>
          <Grid>
            <TextField TextField id="pollingCentre" fullWidth className="result-input" label="Polling Centre" variant="outlined" value={pollingCentre} onChange={e => setPollingCentre(e.target.value)} />
          </Grid>
        </Grid>

        <Grid container spacing={1} >
          <Grid item spacing={1} xs={12} md={6}>
            <Typography variant="h5" className="result-input">Party Name :</Typography>
          </Grid>
          <Grid>
            <TextField id="partyName" fullWidth className="result-input" label="Party Name" variant="outlined" value={partyName} onChange={e => setPartyName(e.target.value)}/>
          </Grid>
        </Grid>

        <Grid container spacing={1} >
          <Grid item spacing={1} xs={12} md={6}>
            <Typography variant="h5" className="result-input">Vote Count :</Typography>
          </Grid>
          <Grid>
            <TextField id="voteCount" fullWidth className="result-input" label="Vote Count" variant="outlined" value={voteCount} onChange={e => setVoteCount(e.target.value)}/>
          </Grid>
        </Grid>

        <Grid container spacing={1} >
          <Grid item spacing={1}xs={12} md={6}>
            <Typography variant="h5" className="result-input">OfficerID :</Typography>
          </Grid>
          <Grid>
            <TextField id="OfficerID" fullWidth className="result-input" label="OfficerID" variant="outlined" value={officerID} onChange={e => setOfficerID(e.target.value)}/>
          </Grid>
        </Grid>

        <Grid container spacing={1} >
          <Grid item spacing={2} xs={12} md={6}>
            <Typography variant="h5" className="result-input">Election Date :</Typography>
          </Grid>
          <Grid>
            <TextField id="ElectionDate" type="datetime-local" fullWidth className="result-input" variant="outlined" value={electionDate} onChange={e => setElectionDate(e.target.value)}/>
          </Grid>
        </Grid>

        <Button style={previewButton} onClick={handlePreviewClick}>
          Preview
        </Button>
    </Box>
  );
}}

export default ResultForm;

const previewButton = {
  backgroundColor: "transparent",
  color: "green",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid green",
  margin: "1.0em",
}