var express = require("express")
var router = express.Router()
var bodyParser = require("body-parser")
app.use(bodyParser.json());
var helper = require("../helpers/todos")
app.use(bodyParser.urlencoded({extended: true}));

var db = require("../models")

router.route("/")
.get(helper.gettodo)
.post(helper.createtodo)

router.route("/:todoid")
.get(helper.find)
.put(helper.update)
.delete(helper.delete)

module.exports = router