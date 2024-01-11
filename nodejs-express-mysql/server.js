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
app.use(express.urlencoded({ extended: true }));

app.use(nftRoutes);

const PORT = process.env.PORT || 5050;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
