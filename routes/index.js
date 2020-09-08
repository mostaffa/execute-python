const express = require('express');
const router = express.Router();
const fs = require('fs')
// const server = require('../bin/www')


/* GET home page. */
router.get('/', function(req, res, next) {
  let script;
  fs.readFile('scripts/run.py',(error, data)=>{
    if(!error){
      script = data;
      res.render('index', { title: 'Execute Python',script:script });
    }
  })
});

router.post("/save", (req,res)=>{
  // console.log(req.body.script)
  fs.writeFile("scripts/run.py", req.body.script.toString(), (error)=>{
    if(error){
      res.send({error:error});
    }else{
      res.json(0)
    }
  });
})

module.exports = router;
