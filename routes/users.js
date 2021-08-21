import express from "express";
import {v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = []

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

router.delete("/:id",(req,res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id)    //if true keep the user in filtered data
    res.send(users);
})

router.patch('/:id', (req,res)=> {     //handle partial updation request
    const {id} = req.params;
    const user = users.find((user)=>user.id === id);
    const {firstName,lastName, age} = req.body;
    if(firstName) user.firstName = firstName;
    if(lastName)  user.lastName  = lastName;
    if(age)       user.age = age;
    res.send(`some information of user with ${id} has been changed `)
})


export default router;