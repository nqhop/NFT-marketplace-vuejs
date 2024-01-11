const Nft = require("../models/nft.js");

exports.findAll = (req, res) => {
  res.send("Welcome to nft market");
};

exports.createNewNft = (req, res) => {
  console.log("Create and Save a new Tutorial");
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const title = req.body.title;
  const description = req.body.description;

  console.log("my nft------");
  console.log("title: " + title + ", description: " + description);
  
  const nft = new Nft(null, req.body.title, req.body.description);
  console.log(nft);
  nft
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));

  // Nft.create(nft, (err, data) => {
  //   if (err)
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while creating the Tutorial.",
  //     });
  //   else res.send(data);
  // });
};
