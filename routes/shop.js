const express = require('express');
const router = express.Router();

router.use('/shop', (req, res, next) => {
    res.send('<h1>Welcome to my shop</h1>');
});

module.exports=router;