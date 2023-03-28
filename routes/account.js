const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
    console.log("Getting account Data");
    res.send("Account Data");
});

module.exports = router;