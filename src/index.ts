import express from "express";

const app = express();
app.use(express.json()); //middleware to parse req.body into json

const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
