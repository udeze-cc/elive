import React, { useState } from 'react'; 
import {Grid, Button, Typography, TextField, Box}  from '@mui/material';
import './App.css';
import ResultTable from './table';

const saveResult = async (body = {}, admin) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const myRequest = new Request(`https://9656mgkl5a.execute-api.eu-west-2.amazonaws.com/dev/create/document/ElectionResults`, {
    body: JSON.stringify(body),
    method: "POST",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  });
  return await fetch(myRequest);
} 

function ResultForm() {
  const [electionPollingCentre, setPollingCentre] = useState('');
  const [electionOfficerId, setOfficerID] = useState('');
  const [electionId, setElectionID] = useState('');
  const [electionDate, setElectionDate] = useState('');
  const [electionWard, setElectionWard] = useState('');
  const [electionLga, setElectionLga] = useState('');
  const [electionState, setElectionState] = useState('');
  const [electionFederal, setElectionFederal] = useState('');

  const [partyVotes1, setPartyVotes1] = useState('');
  const [partyName1, setPartyName1] = useState('');
  const [partyVotes2, setPartyVotes2] = useState('');
  const [partyName2, setPartyName2] = useState('');
  const [partyVotes3, setPartyVotes3] = useState('');
  const [partyName3, setPartyName3] = useState('');
  const [partyVotes4, setPartyVotes4] = useState('');
  const [partyName4, setPartyName4] = useState('');
  
  const [isPreview, setIsPreview] = useState(false);
  const [isTableView, setIsTableView] = useState(false);
  const [results, setResults] = useState({});
  
  const handlePreviewClick = () => {
    setIsPreview(true);
  }

  const handleBackClick = () => {
    setIsPreview(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!electionPollingCentre) return;
    if (!electionOfficerId) return;
    if (!electionId) return;
    if (!electionDate) return;
    if (!electionWard) return;
    if (!electionLga) return;
    if (!electionState) return;
    if (!electionFederal) return;

    let electionVotes = {voteTotal: 0, votesParties: []};
    if (partyVotes1 && partyName1) {
      electionVotes.voteTotal = electionVotes.voteTotal + partyVotes1;
      electionVotes.votesParties.push({"name": partyName1, "voteCount": partyVotes1});
    } else {
      alert("Invalid Form: A minimume of partyVote1 must be entered");
      return;
    }

    if (partyVotes2 && partyName2) {
      electionVotes.voteTotal = electionVotes.voteTotal + partyVotes2;
      electionVotes.votesParties.push({"name": partyName2, "voteCount": partyVotes2});
    }

    if (partyVotes3 && partyName3) {
      electionVotes.voteTotal = electionVotes.voteTotal + partyVotes3;
      electionVotes.votesParties.push({"name": partyName3, "voteCount": partyVotes3});
    }

    if (partyVotes4 && partyName4) {
      electionVotes.voteTotal = electionVotes.voteTotal + partyVotes4;
      electionVotes.votesParties.push({"name": partyName4, "voteCount": partyVotes4});
    }

    alert('You are about to submit these resuts');
    // const {partyName, numberOfVotes, pollingLocation, officialId}
    const body = {electionPollingCentre, electionOfficerId, electionId, electionDate, electionWard, electionLga, electionState, electionFederal, electionVotes};
    saveResult(body, 'udeze.cc@gmail.com')
    .then(async res => {
      const response = await res.json();
      alert(`Form submition is successfully with the following response: ${JSON.stringify(response)}`);
      setResults(response);
      setIsTableView(true);
    })
    .catch(error => console.error(error));
  }

  if (isPreview && !isTableView) {
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
           {electionId}
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="result-input">Election Polling Centre</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
           {electionPollingCentre}
          </Grid>
        </Grid>

        {/* <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="result-input">Party Name</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
           {partyName}
          </Grid>
        </Grid> */}

        {/* <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="result-input">Vote Count</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
           {voteCount}
          </Grid>
        </Grid> */}

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="result-input">Election Officer ID</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
           {electionOfficerId}
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
  } else if (!isTableView) {
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
              <TextField id="ElectionID" fullWidth label="ElectionID" className="result-input" variant="outlined" value={electionId} onChange={e => setElectionID(e.target.value)} />
          </Grid>
        </Grid>

        <Grid container spacing={1} >
          <Grid item spacing={1} xs={12} md={6}>
            <Typography variant="h5" className="result-input"> Polling Centre :</Typography>
          </Grid>
          <Grid>
            <TextField TextField id="pollingCentre" fullWidth className="result-input" label="Polling Centre" variant="outlined" value={electionPollingCentre} onChange={e => setPollingCentre(e.target.value)} />
          </Grid>
        </Grid>

        <Grid container spacing={1} >
          <Grid item spacing={1} xs={12} md={6}>
            <Typography variant="h5" className="result-input">Election Parties :</Typography>
          </Grid>
          <Grid>
            <TextField id="partyName" fullWidth className="result-input" label="Party Name 1" variant="outlined" value={partyName1} onChange={e => setPartyName1(e.target.value)} />
            <TextField id="partyVotes" fullWidth className="result-input" label="Party Votes 1" variant="outlined" value={partyVotes1} onChange={e => setPartyVotes1(e.target.value)} />
            </Grid>
            <Grid>
            <TextField id="partyName" fullWidth className="result-input" label="Party Name 2" variant="outlined" value={partyName2} onChange={e => setPartyName2(e.target.value)} />
            <TextField id="partyVotes" fullWidth className="result-input" label="Party Votes 2" variant="outlined" value={partyVotes2} onChange={e => setPartyVotes2(e.target.value)} />
            </Grid>
            <Grid>
            <TextField id="partyName" fullWidth className="result-input" label="Party Name 3" variant="outlined" value={partyName3} onChange={e => setPartyName3(e.target.value)} />
            <TextField id="partyVotes" fullWidth className="result-input" label="Party Votes 3" variant="outlined" value={partyVotes3} onChange={e => setPartyVotes3(e.target.value)} />
            </Grid>
            <Grid>
            <TextField id="partyName" fullWidth className="result-input" label="Party Name 4" variant="outlined" value={partyName4} onChange={e => setPartyName4(e.target.value)} />
            <TextField id="partyVotes" fullWidth className="result-input" label="Party Votes 4" variant="outlined" value={partyVotes4} onChange={e => setPartyVotes4(e.target.value)} />
          </Grid>
        </Grid>

        <Grid container spacing={1} >
          <Grid item spacing={1} xs={12} md={6}>
            <Typography variant="h5" className="result-input">Election Ward :</Typography>
          </Grid>
          <Grid>
            <TextField id="voteCount" fullWidth className="result-input" label="Vote Count" variant="outlined" value={electionWard} onChange={e => setElectionWard(e.target.value)}/>
          </Grid>
        </Grid>

        <Grid container spacing={1} >
          <Grid item spacing={1} xs={12} md={6}>
            <Typography variant="h5" className="result-input">Election LGA :</Typography>
          </Grid>
          <Grid>
            <TextField id="voteCount" fullWidth className="result-input" label="Vote Count" variant="outlined" value={electionLga} onChange={e => setElectionLga(e.target.value)}/>
          </Grid>
        </Grid>

        <Grid container spacing={1} >
          <Grid item spacing={1} xs={12} md={6}>
            <Typography variant="h5" className="result-input">Election State :</Typography>
          </Grid>
          <Grid>
            <TextField id="voteCount" fullWidth className="result-input" label="Vote Count" variant="outlined" value={electionState} onChange={e => setElectionState(e.target.value)}/>
          </Grid>
        </Grid>

        <Grid container spacing={1} >
          <Grid item spacing={1} xs={12} md={6}>
            <Typography variant="h5" className="result-input">Election Ferderal :</Typography>
          </Grid>
          <Grid>
            <TextField id="voteCount" fullWidth className="result-input" label="Vote Count" variant="outlined" value={electionFederal} onChange={e => setElectionFederal(e.target.value)}/>
          </Grid>
        </Grid>

        <Grid container spacing={1} >
          <Grid item spacing={1}xs={12} md={6}>
            <Typography variant="h5" className="result-input">OfficerID :</Typography>
          </Grid>
          <Grid>
            <TextField id="OfficerID" fullWidth className="result-input" label="OfficerID" variant="outlined" value={electionOfficerId} onChange={e => setOfficerID(e.target.value)}/>
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
} else if (isTableView) {
  return (
    <ResultTable results = {results}/>
  )
}

}

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