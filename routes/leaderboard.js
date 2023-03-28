const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
    console.log("Getting leaderboard Data");
    const dataUserScores = [
        {name: 'John', score: 30},
        {name: 'Bob', score: 20},
        {name: 'Sally', score: 10},
        {name: 'Sue', score: 38},
        {name: 'Alex', score: 120},
        {name: 'Jane', score: 12},
        {name: 'Jim', score: 17},
        {name: 'Mike', score: 46},
        {name: 'Jack', score: 21},
        {name: 'Jen', score: 346},
        {name: 'Adam', score: 22},
      ];
    res.send(dataUserScores);
});

module.exports = router;