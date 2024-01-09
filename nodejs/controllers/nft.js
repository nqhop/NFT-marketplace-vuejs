exports.getNfts = (req, res, next) => {
  res.status(200).json({
    nfts: [
      {
        id: "1",
        name: "Magic Mushroom 0325",
      },
    ],
  });
};
