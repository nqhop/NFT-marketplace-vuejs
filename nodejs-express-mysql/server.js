const express = require("express");

const cors = require("cors");

const nftRoutes = require("./routes/nft.js");
const sequelize = require("./util/database.js");

const app = express();

const corsOptions = {
  //   origin: "http://localhost:8080",
  origin: "*",
};

app.use(cors(corsOptions));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(nftRoutes);

app.get("/testing", () => {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://api.nftport.xyz/v0/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?chain=ethereum&page_number=1&page_size=50&include=metadata&refresh_metadata=false",
    headers: {
      accept: "application/json",
      Authorization: "bb221d21-9dd2-4b2b-bd6c-75aa316eca30",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

const PORT = process.env.PORT || 5050;

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
