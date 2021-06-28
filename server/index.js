const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "An acquaintance of the past will affect you in the near future.",
    "When more becomes too much. It is the same as not enough.",
    "To the world you may be one person, but to one person you may be the world.",
    "Use your eloquence where it will do the most good.",
    "Welcome change.",
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortunes = fortunes[randomIndex];

  res.status(200).send(randomFortunes);
});
app.get("/api/joke", (req, res) => {
  const jokes = [
    "What is thin white and scary?  Homework!!",
    "Why was the broom late?  It over swept.",
    "What do cats eat for breakfast?  Mice Krispies!",
    "Why do fish always sing of key?  Because you can't tuna fish!",
    "What kind of music do chiropractors listen to?  Hip hop.",
    "What do you call a baby with a drum?  A baby boomer.",
    "Why was the tomato blushing?  He saw the salad dressing!",
    "What do you call a lazy baby kangaroo?  A pouch potato!",
    "Why was the cat afraid of the tree?  Because of it's bark!",
    "What room can no one enter?  A mushroom.",
    "How did dinosaurs decorate their bedroom?  With rep-tiles!",
    "Why shouldn't you write with a broken pencil?  Because it's pointless!!",
  ]

  let randomIndex = Math.floor(Math.random() * jokes.length);
  let randomJokes = jokes[randomIndex];

  res.status(200).send(randomJokes);
})
app.listen(4000, () => console.log("Server running on 4000"));
