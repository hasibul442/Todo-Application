import express from "express";
import { createTag, deleteTag, getTagById, listTags, updateTag } from "../Controller/TagController.js";

const router = express.Router();

router.post("/create", (req, res) => {
  createTag(req, res);
});

router.get("/list", (req, res) => {
  listTags(req, res);
});

router.get("/details/:id", (req, res) => {
    getTagById(req, res);
})

router.put("/update/:id", (req, res) => {
    updateTag(req, res);
})

router.delete("/delete/:id", (req, res) => {
    deleteTag(req, res);
})

export default router;
