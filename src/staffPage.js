// src/App.js

import React, { useState } from 'react';
import './App.css';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

// const apiKey = '6YJ1IDez4I3hpEsdqCAWI8fzF6CbtCINx3fRTxEf';
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
// myHeaders.append("x-api-key", apiKey);

const adminEmail = 'udeze.cc@gmail.com';

const updateUser = async (user, admin) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const myRequest = new Request(`https://9656mgkl5a.execute-api.eu-west-2.amazonaws.com/dev/account/update/${admin}`, {
      body: JSON.stringify(user),
      method: "PUT",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
    });
    await fetch(myRequest);
} 

const getUsers = async () => {
  const myHeaders = new Headers();
  const myRequest = new Request(`https://9656mgkl5a.execute-api.eu-west-2.amazonaws.com/dev/accounts`, {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  });
  const response = await fetch(myRequest);
  return response.json();
} 

function DataTable(props) {
    const [users, setUsers] = useState([]);
    if (users.length < 1) {
        getUsers().then(res => {
            setUsers(res);
        });
    }

    const handleUpdateRole = (user, admin) => {
        let activated = user.activated && user.activated == 1 ? true : false;
        if (activated) {
            // Di-activate user
            updateUser({email: user.email, activated: 0}, admin)
            .then(res => {
                console.log('User updated: ', res);
                getUsers().then(res => {
                    setUsers(res);
                });
            });
        } else {
            // Activate user
            updateUser({email: user.email, activated: 1}, admin)
            .then(res => {
                console.log('User updated: ', res);
                getUsers().then(res => {
                    setUsers(res);
                });
            });
        }
    }
    
    const handleAssignUnit = (userId) => {
        console.log("Assign Unit to user with ID:", userId);
        // Add logic to assign unit
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Registered</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.created_at}</TableCell>
                        <TableCell>
                            <Button
                                size="small"
                                variant="contained"
                                style={{ backgroundColor: "#008080", color: "white" }}  // Teal color
                                startIcon={<EditIcon />}
                                disabled = {user.email == adminEmail}
                                onClick={() => handleUpdateRole(user, adminEmail)}
                            >
                                {user.activated == 1 ? 'Revoke Access' : 'Grant Access' }
                            </Button>
                            &nbsp;&nbsp;
                            <Button
                                size="small"
                                variant="contained"
                                style={{ backgroundColor: "#00857A", color: "white" }}  // Variation of teal for differentiation
                                startIcon={<GroupAddIcon />}
                                disabled = {user.email == adminEmail}
                                onClick={() => handleAssignUnit(user.id)}
                            >
                                Assign Unit
                            </Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


function StaffPage() {

  return (
    <div style={{ padding: '40px' }}>
        <Typography variant="h4" gutterBottom>
            Admin Page
        </Typography>
        <DataTable/>
    </div>
  );
}

export default StaffPage;
