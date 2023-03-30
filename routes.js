const express = require("express");
const router = express.Router();

const submissions = require("./submissions");

const log = require("debug")("routes");

router.get("/leaderboard", async (req, res) => {
    console.log("----------- router.get leaderboard");
    const result = await submissions.getAllUserSubmissions();
    res.send(result);
});

router.post("/submit", async (req, res) => {
    console.log("----------- router.post submit");
    const { body } = req;
    console.log(body);
    const result = await submissions.createUserSubmission(body);
    res.send(result);
});

router.delete("/delete", async (req, res) => {
    console.log("----------- router.delete delete");
    const { userName } = req.params;
    console.log(userNamel);
    await submissions.deleteUser(userName);
    res.sendStatus(200);
});

module.exports = router;