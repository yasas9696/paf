var express = require('express');
var router = express.Router();
const categoryservice = require('../services/categoryService');

/* GET categorys listing. */
router.get('/', function(req, res, next) {
  categoryservice.getAllCategorys().then(categorys=>
    res.send(categorys));
});
router.get('/:id', function(req, res, next) {
  categoryservice.getCategorybyId(req.params.id).then(categorys=>
    res.send(categorys));
});
router.post('/', function(req, res, next) {
  categoryservice.addCategory(req.body).then(categorys=>
    res.send(categorys));
});
router.put('/:id', function(req, res, next) {
  categoryservice.updateCategory(req.body,req.params.id).then(categorys=>
    res.send(categorys));
});
router.delete('/:id', function(req, res, next) {
  categoryservice.deleteCategory(req.params.id).then(categorys=>
    res.send(categorys));
});

module.exports = router;