import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.route.js"
import contractRoutes from "./routes/contract.route.js"






dotenv.config();

connectDB();
const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/users",userRoutes);
app.use("/api/contracts",contractRoutes);

app.get("/",(req,res)=>{
    res.send("ContractIQ Api running");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});

