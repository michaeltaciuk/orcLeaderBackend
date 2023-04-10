const express = require("express");
const router = express.Router();

const submissions = require("./submissions");
const accounts = require("./accounts");

const log = require("debug")("routes");

router.get("/challange", (req, res) => {
    console.log("----------- router.get challange");
    const dataChallange = {
        challange: 'Longest Plank',
        desciption: 'hold a plank for as long as you can',
        units: 'Seconds',
      };
    res.send(dataChallange);
});

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

router.post("/usersubmissions", async (req, res) => {
    console.log("----------- router.post usersubmissions");
    const { userName } = req.body;
    console.log(userName);
    const result = await submissions.getSpecificUserSubmissions(userName);
    res.send(result);
});

router.delete("/deleteuser", async (req, res) => {
    console.log("----------- router.delete deleteuser");
    const { userName } = req.body;
    console.log(userName);
    await submissions.deleteUser(userName);
    res.sendStatus(200);
});

router.post("/user", async (req, res) => {
    console.log("----------- router.get user");
    const { userEmail } = req.body;
    console.log(userEmail);
    const result = await accounts.getSpecificUserAccount(userEmail);
    res.send(result);
});

router.post("/user/create", async (req, res) => {
    console.log("----------- router.post create");
    const { userData } = req.params;
    console.log(userDate);
    await accounts.createUserAccount(userData);
    res.sendStatus(200);
});

router.delete("/user/delete", async (req, res) => {
    console.log("----------- router.delete delete");
    const { userEmail } = req.params;
    console.log(userEmail);
    await accounts.deleteUserAccount(userEmail);
    res.sendStatus(200);
});

module.exports = router;