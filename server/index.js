const express=require('express')
const cors=require('cors')

const app=express()
app.use(express.json())
app.use(cors())

const port=4000

app.get('/api/users', (req,res)=>{
  let friends=["Jeddy", "Scott", "Liv", "Ian", "Aiden"]
  res.status(200).send(friends)
})

app.get("/weather/:temperature", (req, res)=>{
  const {temperature} =req.params;
  const phrase=`<h3>It was ${temperature} today</h3>`;
  res.status(200).send(phrase);
})


app.listen(port, ()=> console.log(`server up and running on ${port}`))