import express from "express";
import dotenv from "dotenv";
import s3Routes from "./routes/s3";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/s3", s3Routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
