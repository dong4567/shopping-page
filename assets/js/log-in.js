const fullname = document.getElementById("FullName")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const DateOfBirth = document.getElementById("date-of-birth")
const password = document.getElementById("password")
const signUpBtn = document.getElementById('sign-up-btn')

let userAccount = localStorage.getItem('user-account')

function handleLogIn(event) {
event.preventDefault();

let fullnamevalue = userAccount.fullname
let emailvalue = userAccount.email
let phonevalue = userAccount.phone
let DateOfBirthvalue = userAccount.DateOfBirth
let passwordvalue = userAccount.password
if(    fullname ){

}
}