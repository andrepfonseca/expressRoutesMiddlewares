import express from "express";
import items from "./routes/items.js";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/items", items);

const port = process.env.PORT || 3000;
app.listen(port);
