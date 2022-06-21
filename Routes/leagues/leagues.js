const express = require("express");
const router = express.Router();
router.get("/leagues", async (req, res) => {
  res.status(200).json({
    status: 200,
    msg: "Success",
    result: 'test',
  });
});

module.exports = router;
