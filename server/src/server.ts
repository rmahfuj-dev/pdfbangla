import app from './app'
import { connectDb } from './config/db';
import http, { Server } from 'http'

const server = http.createServer(app);
connectDb().then(()=>{
    server.listen(5000,"0.0.0.0",()=>{
    console.log("running")
})
})