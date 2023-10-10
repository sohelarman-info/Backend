const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      name: "Sohel Arman",
    },
    {
      name: "Mehron",
    },
    {
      name: "Laki",
    },
    {
      name: "Promi",
    },
    {
      name: "Miraz",
    },
    {
      name: "Mojaffor Tal",
    },
    {
      name: "Talukdar",
    },
  ]);
});

module.exports = router;
