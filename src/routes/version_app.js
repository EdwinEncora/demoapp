const { Router } = require('express');
const router = Router();
const fs = require('fs');

let rawdata = fs.readFileSync('./src/json/version_app.json');
let responseData = JSON.parse(rawdata);

router.get('/', (req, res) => {    
    res.json(
        responseData
    );
})

module.exports = router;