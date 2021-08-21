import express from "express";
import {v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = []

router.get('/',(req,res)=>    //functionality for '/users' route (default / means /users here).
{
    console.log(users)
    res.send(users)
});

router.post("/", (req,res) => {    //adds user to the users array
    const user = req.body;

    users.push({...user, id: uuidv4() });   //push user with id to the data
    res.send(`User with name ${user.firstName} successfully added`);   

})

router.get("/:id", (req,res) => {
    const {id} = req.params;      //taking id from req.params.id in 'const id'
    const foundUser = users.find((user) => user.id === id ) 
    
    res.send(foundUser)
   
})


export default router;