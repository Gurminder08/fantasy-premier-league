let express = require("express");
const axios = require("axios");
let router = express.Router();

router.get("/", (req,res)=>{
    console.log(req.url);
    res.render("index");
});

router.get("/bootstrap-static", (req,res)=>{
    //https://fantasy.premierleague.com/api/bootstrap-static/
    const response = axios.get('https://fantasy.premierleague.com/api/bootstrap-static/');
    response.then((resp)=>{
        res.json(resp.data);
    });
})

module.exports = router;