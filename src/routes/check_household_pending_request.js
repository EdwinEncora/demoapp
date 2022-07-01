const { Router } = require('express');
const router = Router();
const fs = require('fs');

let rawdata = fs.readFileSync('./src/json/check_household_pending_request.json');
let responseData = JSON.parse(rawdata);

router.get('/', (req, res) => {    
    res.json(
        responseData
    );
})

module.exports = router;