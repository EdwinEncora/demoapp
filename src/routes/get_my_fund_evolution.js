const { Router } = require('express');
const router = Router();
const fs = require('fs');

let rawdata = fs.readFileSync('./src/json/get_my_fund_evolution.json');
let responseData = JSON.parse(rawdata);

router.post('/', (req, res) => {    
    res.json(
        responseData
    );
})

module.exports = router;