const AWS = require('aws-sdk');
const qldbSession = new AWS.QLDBSession();

const LEDGER_NAME = 'ElectionLedger';

function executeStatement(statement, parameters = []) {
    return qldbSession.sendCommand({
        SessionToken: /* Session Token here if needed */,
        StartTransaction: {},
        ExecuteStatement: {
            Statement: statement,
            Parameters: parameters.map(value => ({ IonText: JSON.stringify(value) })) // Convert parameters to Ion format
        }
    }).promise();
}

function addResults(pollingCentre, electionId, partyName, voteCount, officerId, electionDate) {
  let currentTransactionId;
  let currentCommitDigest;

  const statement = `
      INSERT INTO Results
      VALUE { 
          'electionId': ?,
          'partyName': ?,
          'officerId': ?,
          'electionDate': ?,
          'pollingCentre': ?,
          'voteCount' : ?,
          'ward': 0,
          'lga': 0,
          'state': 0,
          'federal': 0
      }
  `;

  return startTransaction()
      .then(transaction => {
          currentTransactionId = transaction.TransactionId;
          return executeStatement(statement, [electionId, partyName, officerId, electionDate, pollingCentre, voteCount]);
      })
      .then(response => {
          currentCommitDigest = /* Extract commitDigest from the Ion response */;
          return commitTransaction(currentTransactionId, currentCommitDigest);
      })
      .then(() => {
          console.log("Polling Centre results added successfully!");
          return addToWard(electionId, partyName, officerId, electionDate, pollingCentre, voteCount);  // Add this line to start the cascading updates
      })
      .catch(error => {
          console.error("Error adding to Polling Centre:", error);
          throw error;
      });
}

  function addToWard(electionId, partyName, electionDate, voteCount) {
    let currentTransactionId;
    let currentCommitDigest;

    const statement = `
        UPDATE Results 
        SET ward = ward + ?
        WHERE electionId = ? AND partyName = ?;
    `;

    return startTransaction()
        .then(transaction => {
            currentTransactionId = transaction.TransactionId;
            return executeStatement(statement, [addToWard(electionId, partyName, electionDate, ward, voteCount)]);
        })
        .then(response => {
            currentCommitDigest = /* Extract commitDigest from the Ion response */;
            return commitTransaction(currentTransactionId, currentCommitDigest);
        })
        .then(() => {
            console.log("Ward results updated successfully!");
            return addToLGA(electionId, partyName, voteCount);  // Return the promise of the next function
        })
        .catch(error => {
            console.error("Error updating Ward:", error);
            throw error;
        });
}

function addToLGA(electionId, partyName, voteCount) {
    let currentTransactionId;
    let currentCommitDigest;

    const statement = `
        UPDATE Results 
        SET lga = lga + ?
        WHERE electionId = ? AND partyName = ?;
    `;

    return startTransaction()
        .then(transaction => {
            currentTransactionId = transaction.TransactionId;
            return executeStatement(statement, [voteCount, electionId, partyName]);
        })
        .then(response => {
            currentCommitDigest = /* Extract commitDigest from the Ion response */;
            return commitTransaction(currentTransactionId, currentCommitDigest);
        })
        .then(() => {
            console.log("LGA results updated successfully!");
            return addToState(electionId, partyName, voteCount);  // Return the promise of the next function
        })
        .catch(error => {
            console.error("Error updating LGA:", error);
            throw error;
        });
}

function addToState(electionId, partyName, voteCount) {
    let currentTransactionId;
    let currentCommitDigest;

    const statement = `
        UPDATE Results 
        SET state = state + ?
        WHERE electionId = ? AND partyName = ?;
    `;

    return startTransaction()
        .then(transaction => {
            currentTransactionId = transaction.TransactionId;
            return executeStatement(statement, [voteCount, electionId, partyName]);
        })
        .then(response => {
            currentCommitDigest = /* Extract commitDigest from the Ion response */;
            return commitTransaction(currentTransactionId, currentCommitDigest);
        })
        .then(() => {
            console.log("State results updated successfully!");
            return addToFederal(electionId, partyName, voteCount);  // Return the promise of the next function
        })
        .catch(error => {
            console.error("Error updating State:", error);
            throw error;
        });
}

function addToFederal(electionId, partyName, voteCount) {
    let currentTransactionId;
    let currentCommitDigest;

    const statement = `
        UPDATE Results 
        SET federal = federal + ?
        WHERE electionId = ? AND partyName = ?;
    `;

    return startTransaction()
        .then(transaction => {
            currentTransactionId = transaction.TransactionId;
            return executeStatement(statement, [voteCount, electionId, partyName]);
        })
        .then(response => {
            currentCommitDigest = /* Extract commitDigest from the Ion response */;
            return commitTransaction(currentTransactionId, currentCommitDigest);
        })
        .then(() => {
            console.log("Federal results updated successfully!");
        })
        .catch(error => {
            console.error("Error updating Federal:", error);
            throw error;
        });
}

function startTransaction() {
    return qldbSession.sendCommand({
        StartTransaction: {}
    }).promise();
}

function commitTransaction(transactionId) {
    return qldbSession.sendCommand({
        CommitTransaction: {
            TransactionId: transactionId,
            CommitDigest: /* Some commit digest value, which is a SHA-256 hash of the transaction payload */
        }
    }).promise();
}

addResults(electionId, partyName, voteCount, officerId, electionDate) // Use the correct function name here
.then(() => {
    console.log("All updates completed successfully!");
})
.catch(error => {
    console.error("Error in transaction:", error);
    // Handle transaction rollback or compensating actions here
});
