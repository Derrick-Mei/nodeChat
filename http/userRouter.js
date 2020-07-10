const express = require("express");

const router = express.Router({
  mergeParams: true,
});

router.get("/login", (req, res, next) => {
  const { user, password } = req;
  res.json({ user, password });
});

module.exports = router;