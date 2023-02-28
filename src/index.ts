import express from "express";
import diaresRouter from "./routes/diares";

const app = express();
app.use(express.json()); //middleware to parse req.body into json

const PORT = 3000;

app.get("/ping", (_req, res) => {
  res.send({
    message: "Hello World!",
    date: new Date().toISOString(),
    lunota: "la más hermosa",
  });
});

app.use("/api/diaries", diaresRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
