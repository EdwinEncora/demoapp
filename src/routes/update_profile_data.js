const { Router } = require('express');
const router = Router();
const fs = require('fs');

let rawdata = fs.readFileSync('./src/json/update_profile_data.json');
let responseData = JSON.parse(rawdata);

router.post('/', (req, res) => {    
    res.json(
        responseData
    );
})

module.exports = router;