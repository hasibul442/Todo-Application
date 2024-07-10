import express from "express";
import { getUserDetails, login, registerUser, userList } from "../Controller/UserController.js";

const router = express.Router();

router.get('/list', function(req, res) {
    userList(req, res);
});

router.post('/register', function(req, res) {
    registerUser(req, res);
});

router.post('/login', function(req, res) {
    login(req, res);
});

router.get('/details', function(req, res) {
    getUserDetails(req, res);
});

export default router;