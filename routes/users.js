import express from "express";
import {createUser,getUser,getSpecificUser,deleteUser,updateUser} from "../controllers/users.js"

const router = express.Router();


router.get('/', getUser);

router.post("/", createUser )

router.get("/:id", getSpecificUser)

router.delete("/:id", deleteUser)

router.patch('/:id', updateUser)


export default router;