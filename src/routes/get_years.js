const { Router } = require('express');
const router = Router();
const fs = require('fs');

let rawdata = fs.readFileSync('./src/json/get_years.json');
let responseData = JSON.parse(rawdata);

router.post('/', (req, res) => {    
    res.json(
        responseData
    );
})

module.exports = router;