const express = require("express");
const { ResultWithContext } = require("express-validator/src/chain");
const router = express.Router();


// @route   GET api/profile
// @desc    test route
//access    Public

router.get('/', (req, res) =>{
    res.send('Profile route');
})


module.exports = router;
