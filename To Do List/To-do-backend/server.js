import express from "express"

import { connectDB } from "./mongo-DB/connection.js"
import routes from "./routes-1.js"

let app = express()
app.use(express.json())

app.use("/todo", routes)

connectDB().then(()=>{
    app.listen(4752, () => console.log("Server started at 4752"))
})
.catch((err)=>{
    console.log("Error",err)
})
