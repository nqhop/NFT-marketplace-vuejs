// const sql = require("./db.js");

// const Nft = function (nft) {
//   this.title = nft.title;
//   this.description = nft.description;
// };

// Nft.create = (newNft, result) => {
//   sql.query("INSERT INTO nfts SET ?", newNft, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("created tutorial: ", { id: res.insertId, ...newNft });
//     result(null, { id: res.insertId, ...newNft });
//   });
// };

// module.exports = Nft;

const Sequelize = require("sequelize");

const sequelize = require("../util/database.js");

const Nft = sequelize.define("nft", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Nft;
