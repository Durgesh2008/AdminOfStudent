import connectToMongo from './db.js'
import express from 'express'
import cors from 'cors'
import authroute from './routes/auth.js'
import Alluser from './routes/alluser.js'
import 'dotenv/config'
connectToMongo();
const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', authroute)
app.use('/api/alluser', Alluser)


app.listen(port, () => {
  console.log(` listening at http://localhost:${port}`)
})