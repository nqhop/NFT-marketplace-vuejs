const nftController = require("../controllers/nft.js");

const router = require("express").Router();

router.get("/nfts", nftController.findAll);

router.post("/nft", nftController.createNewNft);

module.exports = router;
