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

  // Create a Tutorial
  const nft = new Nft({
    title: req.body.title,
    description: req.body.description,
  });

  // Save nft in the database
  Nft.create(nft, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    else res.send(data);
  });
};
