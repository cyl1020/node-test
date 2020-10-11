var fs = require('fs')

var dbPath = './db.json'

//读取学生信息
exports.find = function(callback){
    fs.readFile(dbPath,'utf-8',function(err,data){
        if(err){
            return callback(err)
        }
        var datas = JSON.parse(data)

        callback(null,datas)
    })
}

//保存学生信息
exports.save = function(data_s,callback){
    fs.readFile(dbPath,'utf-8',function(err,data){
        if(err){
            return callback(err)
        }
        var datas = JSON.parse(data).students

        var comments = JSON.parse(data).comments

        data_s.id = datas.length > 0 ? datas[datas.length - 1].id + 1 : 1705100101

        datas.push(data_s)

        var file = JSON.stringify({
            students:datas,
            comments:comments
        })

        fs.writeFile(dbPath,file,function(err){
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}

//删除学生信息 
exports.delete = function(id,callback){
    fs.readFile(dbPath,'utf-8',function(err,data){
        if(err){
            return callback(err)
        }
        var datas = JSON.parse(data).students

        var comments = JSON.parse(data).comments

        var ret = datas.findIndex(function(item){
            return item.id === parseInt(id)
        })

        datas.splice(ret,1)

        var file = JSON.stringify({
            students:datas,
            comments:comments
        })

        fs.writeFile(dbPath,file,function(err){
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}

//渲染编辑页面

exports.findId = function(id,callback){
    fs.readFile(dbPath,'utf-8',function(err,data){
        if(err){
            return callback(err)
        }
        var datas = JSON.parse(data).students

        var ret = datas.find(function(item){
            return item.id === parseInt(id)
        })

        callback(null,ret)
    
    })
}

//处理编辑页面

exports.update = function(student,callback){
    fs.readFile(dbPath,'utf-8',function(err,data){
        if(err){
            return callback(err)
        }
        var datas = JSON.parse(data).students

        var comments = JSON.parse(data).comments

        student.id = parseInt(student.id)
        
        var stu = datas.find(function(item){
            return item.id === student.id
          })
    
          for(var key in student){
            stu[key] = student[key]
          }

        var file = JSON.stringify({
            students:datas,
            comments:comments
        })

        fs.writeFile(dbPath,file,function(err){
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}

//查询学生信息
exports.findinf = function(student,callback){
    fs.readFile(dbPath,'utf-8',function(err,data){
        if(err){
            return callback(err)
        }

        var datas = JSON.parse(data).students

        var comments = JSON.parse(data).comments

        var newarr = datas.filter(function(item){
            return item.id === parseInt(student.id)
        })
        callback(null,newarr,comments)
    })
}

//添加留言信息

exports.add = function(comment,callback){
    fs.readFile(dbPath,'utf-8',function(err,data){
        if(err){
            return callback(err)
        }

        var datas = JSON.parse(data).students

        var comments = JSON.parse(data).comments

        var date = new Date()
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        month = month<10?'0'+month:month
        day = day<10?'0'+day:day
        hour = hour<10?'0'+hour:hour
        minute = minute<10?'0'+minute:minute
        second = second<10?'0'+second:second
        day = day<10?'0'+day:day
        comment.time = year +'-'+ month +'-'+ day +' '+ hour +':'+ minute +':'+ second

        comments.unshift(comment)

        var file = JSON.stringify({
            students:datas,
            comments:comments
        })

        fs.writeFile(dbPath,file,function(err){
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}