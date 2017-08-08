/// <reference path="typings/jquery/jquery.d.ts" />
var UserList = (function () {
    function UserList() {
        this.users = new Array();
    }
    UserList.prototype.load = function () {
        var _this = this;
        $.getJSON('http://localhost:55562/Home/GetUsers', function (data) {
            _this.users = data;
            if (_this.users == null)
                alert('пользователей загрузить не удалось');
            else
                alert('данные загружены');
        });
    };
    UserList.prototype.displayUsers = function () {
        var table = '<table class="table">';
        console.log(this.users);
        this.users.forEach(function (item, i, arr) {
            var tableRow = '<tr>' +
                '<td>' + item.id + '</td>' +
                '<td>' + item.name + '</td>' +
                '<td>' + item.age + '</td>' +
                '</tr>';
            table += tableRow;
            console.log(item);
        });
        table += '</table>';
        $('#content').html(table);
    };
    return UserList;
}());
var User = (function () {
    function User() {
    }
    return User;
}());
window.onload = function () {
    var userList = new UserList();
    $("#loadBtn").click(function () { userList.load(); });
    $("#displayBtn").click(function () { userList.displayUsers(); });
};
