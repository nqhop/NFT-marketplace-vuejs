const express = require("express");

const nftController = require("../controllers/nft");

const router = express.Router();

router.get("/nfts", nftController.getNfts);

module.exports = router;
