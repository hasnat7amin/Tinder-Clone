import express  from "express";
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import cors from 'cors'
const app = express()
const port = process.env.PROT || 8001
const connection_url = "mongodb+srv://admin:123@cluster0.fw7rx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(express.json())
app.use(cors())
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})


app.get("/", (req,res) => {
    res.status(200).send("Hello Hasnat Amin ")
})

app.post("./tinder/card", (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) =>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})


app.get("/tinder/card",(req, res) => {
    Cards.find((err, data) =>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.listen(port, ()=>{
    console.log("listening at localhost: "+port)
})