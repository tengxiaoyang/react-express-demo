const express = require('express')
const mongoose = require('mongoose')

// 链接mongo，使用react集合：
const DB_URL = 'mongodb://localhost:27017/react'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
  console.log('mongo connect success')
})

// 新建模型：user是文档名，值是new mongoose.Schema，里面的user等是字段
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true},
}))

// 新增数据：
// User.create({
//   user: 'Gerst',
//   age: 18
// }, function(err, doc) {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })

// 删除数据：
// User.remove({
//   age: 18
// }, function(err, doc) {
//   console.log(doc)
// })

// 更新数据：
// User.updateMany({
//   'user': 'Asphalt'
// }, {
//   '$set': {age: 23}
// }, function(err, doc) {
//   console.log(doc)
// })

// 新建app：
const app = express()

app.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>')
})

app.get('/data', function(req, res) {
  User.findOne({user: 'Gerst'}, function(err, doc) {
    return res.json(doc)
  }) //查找数据
})

// app.get('/delete', function(req, res) {

// })

app.listen(9093, function() {
	console.log('Node app start at port 9093')
})