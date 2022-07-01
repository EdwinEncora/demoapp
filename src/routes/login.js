const { Router } = require('express');
const router = Router();
const fs = require('fs');

//let rawdata = fs.readFileSync('./src/json/login_error.json');
let rawdata = fs.readFileSync('./src/json/login.json');
let student = JSON.parse(rawdata);


router.post('/', (req, res) => {    
    res.json(
        student
    );
    //res.send(401, student);
})

module.exports = router;