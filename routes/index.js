module.exports = (app) => {
    app.use("/leaderboard", require("./leaderboard"));
    app.use("/submit", require("./submit"));
    app.use("/account", require("./account"));
    return app;
};