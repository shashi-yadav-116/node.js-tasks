

const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
  axios.get('http://localhost:3006/ownlog')
    .then(response => {
      
      console.log(response.data);
      res.send('Request successful');
    })
    .catch(error => {
      // Handle errors
      if (error.code === 'ECONNREFUSED') {
        console.error('Connection refused. Is the server running?');
        res.status(500).send('Internal Server Error');
      } else {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    });
});

app.listen(3007, () => {
  console.log('Server is running on http://localhost:3007');
});
