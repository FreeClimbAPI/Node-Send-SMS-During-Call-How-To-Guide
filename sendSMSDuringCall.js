require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const {
  PerclScript,
  Sms
} = require('@freeclimb/sdk')

const app = express()
app.use(bodyParser.json())

const port = process.env.PORT || 80
const host = process.env.HOST

app.post('/incomingCall', (req, res) => {
  res.status(200).json(new PerclScript({
    commands: [
      new Sms({
        to: req.body.to,
        from: req.body.from,
        text: 'Incoming Phone Call',
        notificationUrl: `${host}/notificationUrl`
      })
    ]
  }).build())
})

// Receive status updates of the sms
app.post('/notificationUrl', (req, res) => {
  console.log('Outbound Message Status Change: ', req.body)
})

// Specify this route with 'Status Callback URL' in App Config
app.post('/status', (req, res) => {
  // handle status changes
  res.status(200)
})

app.listen(port, () => {
  console.log(`Starting server on ${port}`)
})