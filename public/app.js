
$(document).ready(function () {
    $.getJSON("/api/todos")
        .then(addtodos)
    $("#todoInput").keypress(function (e) {
        if (e.which == 13) {
            createnew()
        }
    })
    $('.list').on('click', 'span', function () {
        removetodo($(this).parent())
    })
    $('.list').on('click', 'li', function (e) {
        updatetodo($(this))
        e.stopPropagation()
    })
})

function addtodos(todos) {
    todos.forEach(t => {
        addtodo(t)
    });
}
function addtodo(todo) {

    var newtodo = $('<li class = "task">' + todo.name + '<span>x</span></li>');
    if (todo.completed) {
        newtodo.addClass("done")
    }
    newtodo.data("id", todo._id)
    newtodo.data("completed", todo.completed)
    $('.list').append(newtodo)

}
function createnew() {
    var inp = $("#todoInput").val()
    $.post("/api/todos", { name: inp })
        .then((e) => {
            addtodo(e)
            $("#todoInput").val('')
        }).catch((e) => {
            console.log(e)
        })
}

function removetodo(todo) {
    var cid = todo.data('id')
    $.ajax({
        method: 'delete',
        url: 'api/todos/' + cid
    }).then(function (data) {
        console.log(data);
        todo.remove()
    }).catch((e) => {
        console.log(e)
    })
}
function updatetodo(todo) {
    var cid = todo.data('id')
    var stat =  !(todo.data("completed"))

    var data = {
            completed:stat
        }
    $.ajax({
        method: 'put',
        url: 'api/todos/' + cid,
        data :data
    }).then(function (data) {
        console.log(stat);
        todo.toggleClass("done")
        todo.data("completed",stat)
    }.bind(this)).catch((e) => {

    })
}