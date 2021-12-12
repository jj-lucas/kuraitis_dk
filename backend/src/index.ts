require('dotenv').config({ path: '.env' })

const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Hello World!')
})

// METRICS

// CORS

// PRISMA

// BODY PARSER

// APOLLO SERVER

// Populate user

// Health check

app.listen(process.env.PORT, () => {
	console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
