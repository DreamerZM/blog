var express = require('express');
var router = express.Router();
var fs = require("fs")
var path=require('path');

var BLOG_TYPE = ['.md','.txt']
var blogs = []
function get_total(){
    const files = fs.readdirSync('./blogs/')
    files.forEach(function (item, index) {
        let stat = fs.lstatSync("./blogs/" + item)
        let extname=path.extname(item);
        if(BLOG_TYPE.includes(extname))
        blogs.push(stat)
    })
    console.log(blogs)
    return blogs.length
}   
get_total()
/* GET users listing. */
router.get('/', function(req, res, next) {
    var total = get_total()
    res.send('this is blog server');
  });
  
  module.exports = router;
  