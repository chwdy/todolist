var db = require("../models")
exports.gettodo = function (req, res) {
    db.todo.find()
        .then(function (todos) {
            res.json(todos)
        }).catch(function (err) {
            res.send(err)
        })
}


exports.createtodo = function (req, res) {
    console.log(req.body)
    db.todo.create(req.body)
        .then(function (newtodo) {
            res.status(201).json(newtodo)
        }).catch(function (err) {
            res.send(err)
        })
}
exports.find = function (req, res) {
    db.todo.findById(req.params.todoid)
        .then(function (todo) {
            res.json(todo)
        }).catch(function (err) {
            res.send(err)
        })
}

exports.update = function (req, res) {
    db.todo.findByIdAndUpdate({ _id: req.params.todoid }, req.body, { new: true })
        .then(function (todo) {
            res.json(todo)
        }).catch(function (err) {
            res.send(err)
        })
}

exports.delete = function (req, res) {
    db.todo.remove({ _id: req.params.todoid })
        .then(function (todo) {
            res.send("deleted")
        }).catch(function (err) {
            res.send(err)
        })
}

module.exports = exports