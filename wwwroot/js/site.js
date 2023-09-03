// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var numberList = [5, 26, 32, 43, 56, 23, 3]
var number
var input = document.getElementById("number")
input.focus()

getList()
var tarih= new Date;
alert("BunGün: Ayın " + tarih.getDate()+" si");



function addNumber() {
    number = input.value;

    if (number == "") {
        alert("Lütfen bir sayı giriniz!")
        input.focus()
    } else {


        if (numberList.indexOf(parseInt(number)) != -1) {
            alert("Lütfen listede olmayan sayı giriniz!")
            input.value = ""
            input.focus()
        } else {
            numberList.push(parseInt(number))
            //console.log(numberList)
            input.value = ""
            input.focus()
            getList()
        }

    }

}

function getList() {
    var list = document.getElementById("list")
    list.innerHTML = ""
    for (let index = 0; index < numberList.length; index++) {
        const element = numberList[index]
        var li = document.createElement("li")
        li.className = "list-group-item list-group-item-action"
        var liText = document.createTextNode(element)
        li.appendChild(liText)
        list.appendChild(li)
        var btnDelete = document.createElement("i")
        btnDelete.className = "fa-solid fa-trash text-danger btn-delete"
        var deleteFunction = "deleteNumber(" + element + ")"
        btnDelete.setAttribute("onclick", deleteFunction)
        li.appendChild(btnDelete)
        //console.log(element)
    }
}

function deleteNumber(element) {
    // alert(element + " silmek için tıklandı!")
    var confirm = window.confirm("Silmek istediğinizden emin misiniz?")

    if (confirm) {
        var newNumberList = []
        numberList.map((item) => {
            if (item != element) {
                newNumberList.push(item)
            }
        }
        )
        numberList = newNumberList;
        getList()
    }

}
