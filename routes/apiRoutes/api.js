const fs = require("fs");
const { v4: uuid } = require('uuid');
const path = require("path");

module.exports = function(app) {
    app.get("/api/notes", (req, res) => {
        const notes = JSON.parse(fs.readFileSync(path.join(__dirname, "../../db/db.json")));
        res.json(notes);
    });

    app.post("/api/notes", (req, res) => {
        const newNote = {
            id: uuid(),
            title: req.body.title,
            text: req.body.text
        };

        const oldNotes = JSON.parse(fs.readFileSync(path.join(__dirname, "../../db/db.json")));
        oldNotes.push(newNote);
        fs.writeFileSync(path.join(__dirname, "../../db/db.json"), JSON.stringify(oldNotes));
        res.json(oldNotes);
    });
};
