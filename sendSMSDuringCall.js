require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const persephonySDK = require('@persephony/sdk')

const port = process.env.PORT || 3000
const host = process.env.HOST
const accountId = process.env.ACCOUNT_ID
const authToken = process.env.AUTH_TOKEN
const persephony = persephonySDK(accountId, authToken)

app.post('/incomingCall', (req, res) => {
  const options = {
    notificationUrl: `${host}/notificationUrl`
  }
  // Create sms PerCL that sends sms to current caller using the number handling the request
  const smsCommand = persephony.percl.sms(req.body.to, req.body.from, 'Incoming Phone Call', options)
  const percl = persephony.percl.build(smsCommand)
  res.status(200).json(percl)
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