const express = require('express');
const router = express.Router();


router.get('/config', (req, res) => {
    return res.status(200).json({
        status: 'OK',
        data: process.env.CLIENT_ID
    })
})


module.exports = router;