const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
    console.log("Posting new submission Data");
    res.send("Submission Sent");
});

module.exports = router;