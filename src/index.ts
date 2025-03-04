import express, { Application } from "express";
import cors from "cors";
import patientRoutes from "./routes/patientRoutes";
import { prisma } from "./prisma"; // Use new Prisma client
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api", patientRoutes);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Remove app.listen() in serverless environments
export default app;
