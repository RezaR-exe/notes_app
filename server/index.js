import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pg from "pg";
import "dotenv/config"

const app = express()
app.use(cors())
const port = 8080
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = new pg.Client({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
});

db.connect();

app.get("/export", async (req, res) => {
    const result = await db.query("SELECT * FROM notes")
    res.send(result.rows)
})

app.post("/import", (req, res) => {
    const result = db.query("INSERT INTO notes(title, content) VALUES($1, $2)", [req.body.title, req.body.content])
    res.send("done")
})

app.post("/delete", (req, res) => {
    const result = db.query("DELETE FROM notes WHERE id=$1", [req.body.id])
    res.send("done")
})

app.listen(port, () => {
    console.log("listening to port 8080")
})