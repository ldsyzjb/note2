var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  let filePath = '/Users/Administrator/Desktop/note2/app/public/index.html',
      options = {
        headers: {
          'content-type': 'text/html'
        }
      }
  res.sendFile(filePath, options, err => console.log(err|| 'no error'))
});
router.get('/css/style/css-center.css', function(req, res){
  res.set('cache-control', 'max-age=no-cache');
  let filePath = '/Users/Administrator/Desktop/note2/css/style/css-center.css'
  let options = {
    headers: {
      // "Cache-Control": "max-age=123456"
    }
  }
  res.type('css')
  res.sendFile(filePath, options, err => console.log(err))
})


module.exports = router;
