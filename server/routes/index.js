const express = require('express');
const router = express.Router();
const connectMultipary = require('connect-multiparty');

const multipartyMiddleware = connectMultipary({
  uploadDir: './uploads'
});

router.post('/uploads', multipartyMiddleware, function(req, res) {
  const files = req.files;
  res.json({ message: files });
});

module.exports = router;
