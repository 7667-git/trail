// const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path')
// const os = require('os')
const add = require('./main.js')
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

console.log(add.addition(5,3))







































// function register() {
//     console.log("aaaaaaaaaa")
//     var name = document.getElementById("data1").value
//     var number = document.getElementById("data2").value
//     var email = document.getElementById("data3").value
//     var password = document.getElementById("data4").value

//     var user = {
//         Name: name,
//         Contact: number,
//         Email: email,
//         Password: password
//     }
//     console.log(user, "jj")
//     localStorage.setItem("user", JSON.stringify(user))
//     window.location.href = "login.html"
// }

// function login() {
//     console.log("1111")
//     var email = document.getElementById("data1").value ? document.getElementById("data1").value : null
//     var password = document.getElementById("data2").value ? document.getElementById("data2").value : null
//     console.log(email, "jhj", password)
//     if ((email == null || email == undefined) || (password == null || password == undefined)) {
//         alert("Please fill all the details")     
//     }else{
//            var fetchdata = JSON.parse(localStorage.getItem("user"))
//            console.log(fetchdata)                  

//         if (fetchdata.Email == email && fetchdata.Password == password) {
//             alert("Login Successfully")
//         } else {
//             alert("Invalid Credentials")
//         }
//     }

// }    