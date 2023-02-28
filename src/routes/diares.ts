import express from "express";
import * as diaryServices from "../services/diaryServices";
import toNewDiaryEntry from "../utils/toNewDiaryEntry";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getNonSensitiveEntries());
});

router.get("/private", (_req, res) => {
  res.send(diaryServices.getEntries());
});

router.get("/:id", (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id));
  if (diary) {
    res.send(diaryServices.findById(Number(req.params.id)));
  } else {
    res.send(404).send("Diary not found");
  }
});

router.post("/", (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);
    const addedEntry = diaryServices.addDiary(newDiaryEntry);
    res.json(addedEntry);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Something went wrong");
    }
  }
});

router.delete("/:id", (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id));
  if (diary) {
    diaryServices.deleteDiary(Number(req.params.id));
    res.send("Diary deleted");
  } else {
    res.send(404).send("Diary not found");
  }
});

export default router;
