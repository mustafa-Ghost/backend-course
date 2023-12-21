const expree = require('express');
const ngrok = require('@ngrok/ngrok');
const express = require('express');

// Create webserver
const app = express()

app.listen(8080, () => {
    console.log('running')
})

app.get('/', (req, res) => {
    res.send("Hello Express")
})
// Get your endpoint online
// ngrok.connect({ addr: 8080, authtoken_from_env: true })
//   .then(listener => console.log(`Ingress established at: ${listener.url()}`));