import express from "express";
import weatherRoutes from "./routes/weather.routes.js";

const app = express();

app.use(express.json());

// register routes
app.use("/api/weather", weatherRoutes);

export default app;
