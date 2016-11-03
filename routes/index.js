var express = require('express');
var router = express.Router();
var Post = require('../models/post');

var pages = ['index', 'details', 'contact', 'create', 'post']

/* GET home page. */
router.get('/', function(req, res, next) {

    Post.find(function(err, docs) {
        res.render('blog/index', {
            title: 'MyBlog',
            allPost: docs
        });

    });


});
router.get('/details', function(req, res, next) {

    Post.find(function(err, docs) {
        res.render('blog/details', { title: 'Details-m8', allPost: docs });
    });

});

router.get('/:page', function(req, res, next) {
    var page = req.params.page
    if (pages.indexOf(page) == -1) {
        res.render('error', { message: 'Page Not Found! Check your spelling'})
    }

    var id = req.query.id
    Post.findById(id, function(err, post){
      res.render('blog/' + page, {post: post})
    })

});

router.get('/:page', function(req, res, next) {

    var page = req.params.page
    if (pages.indexOf(page) == -1) {
        res.render('error', {
            message: 'Page Not Found! Check your spelling'
        })
        return
    } else
        res.render('blog/' + page, {
            title: 'Details'
        });

})

router.post('/create', function(req, res, next) {

    var post = req.body
    Post.create(post, function(err, posting) {
        if (err) {
            res.render('error', {
                message: 'Thats not right'
            })
        }
        res.redirect('/');
    })

});


module.exports = router;
