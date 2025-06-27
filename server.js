const express = require("express");
const app = express();
const port = 3000;

/**
app.get("/", (req, res) => {
  res.send("Hello World!");
}); */

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost: ${port}`);
});

const posts = [
  {
    title: " Ciambellone",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: 
    tags: ["torta","fatto a mano", "ricetta veloce", "cioccolato" ]
  },
];
