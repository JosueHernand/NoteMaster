const fs = require("fs");
const { v4: uuid } = require('uuid');
const path = require("path");

module.exports = function(app) {
    app.get("/api/notes", (req, res) => {
        const notes = JSON.parse(fs.readFileSync(path.join(__dirname, "../../db/db.json")));
        res.json(notes);
    });

    app.post("/api/notes", (req, res) => {

    });
};
