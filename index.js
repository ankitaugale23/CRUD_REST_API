import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.urlencoded());

app.use('/users', usersRoutes);     //default route app will redirect too

app.get("/", (req,res) => {
    res.send("welcome");
})

app.listen(PORT, ()=> {
    console.log(`server running on port http://localhost:${PORT}`);
})