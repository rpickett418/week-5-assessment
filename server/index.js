const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Your awesome!",
					 "Stay Golden.",
					 "Life can be challenging, that's the only way you'll learn.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "Your mind is your greatest asset.",
    "A truly rich life contains love and art in abundance!",
    "Believe it can be done.",
    "Like the river flow into the sea. Something are just meant to be.",
    "Change is happening in your life, so go with the flow."
  ];
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortunes = fortunes[randomIndex];

  res.status(200).send(randomFortunes);
});

app.get("/api/birthday/", (req,res) => {
  const birthdayFortunes = [
    "Your desires guide you towards the goals you should be pursuing!",
    "The energy that guides you will put you in touch with the motivating force that draws your individual expression.",
    "Staying active gives you a strong will to overcome any obstacle, including self-doubt!",
    "You realize how much negative emotions affect you, whether they are your own or that of others.",
    "Purity of mind and body are important for maintaining internal clarity.",
  ];
  let randomIndex = Math.floor(Math.random() * birthdayFortunes.length);
  let randomBirthdayFortunes = birthdayFortunes[randomIndex];

  res.status(200).send(randomBirthdayFortunes);
});



app.listen(4000, () => console.log("Server running on 4000"));

