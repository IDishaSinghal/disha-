import express from "express";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  const { fName, lName } = req.body;
  if (fName && lName) {
    const numLetters = fName.length + lName.length;
    res.render("index", { numberofLetters: numLetters });
  } else {
    res.render("index", { numberofLetters: null, error: "Please provide both first name and last name." });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
