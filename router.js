var Student = require('./student')

// Express 提供了一种更好的方式
// 专门用来包装路由的
var express = require('express')

const request = require('request')

// 1. 创建一个路由容器
var router = express.Router()

router.get('/students',function(req,res){
    Student.find(function(err,data){
        if(err){
            return res.status(500).send('Server error.')
        }
        res.render('index.html',{
            students : data.students,
            comments : data.comments
        })
    })

})
router.get('/students/new',function(req,res){
    res.render('new.html')
    
})
router.post('/students/new',function(req,res){
    Student.save(req.body,function(err,data){
        if(err){
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})
router.get('/students/edit',function(req,res){
    Student.findId(parseInt(req.query.id),function(err,data){
        if(err){
            return res.status(500).send('Server error.')
        }
        
        res.render('edit.html',{
            students:data
        })
    })
})
router.post('/students/edit',function(req,res){
    Student.update(req.body,function(err){
        if(err){
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})
router.get('/students/delete',function(req,res){

    Student.delete(req.query.id,function(err){
        if(err){
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})

router.get('/students/s',function(req,res){
    Student.findinf(req.query,function(err,...data){
        if(err){
            return res.status(500).send('Server error.')
        }
        res.render('index.html',{
            students:data[0],
            comments : data[1]
        })
    })
    
})

router.get('/students/new_c',function(req,res){
    res.render('edit-c.html')
})

router.post('/students/new_c',function(req,res){
    Student.add(req.body,function(err,data){
        if(err){
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})

router.get('/students/grade',function(req,res){
    Student.findId(parseInt(req.query.id),function(err,data){
        if(err){
            return res.status(500).send('Server error.')
        }
        
        res.render('grade.html',{
            students:data
        })
    })
})

// router.get('/students/weather',function(req,res){
//     res.render('weather.html')
// })



module.exports = router