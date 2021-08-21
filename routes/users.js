import express from "express";

const router = express.Router();

const users = [
    {
        firstName: "Ankita",
        lastName: "Ugale",
        age: 20
    },
    {
        firstName: "Tushar",
        lastName: "Ugale",
        age: 19
    }
]

router.get('/',(req,res)=>    //functionality for '/users' route (default / means /users here).
{
    console.log(users)
    res.send(users)
});

router.post("/", (req,res) => {    //adds user to the users array
    const user = req.body;
    users.push(user);
    res.send(`User with name ${user.firstName} successfully added`);   

})


export default router;