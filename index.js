import express from 'express'
import mongoose from 'mongoose'
import router from "./router/router.js";
import {DB_URL, PORT} from "./config/config.js";

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use('/api/v1', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
