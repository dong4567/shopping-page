const fullname = document.getElementById("FullName")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const DateOfBirth = document.getElementById("date-of-birth")
const password = document.getElementById("password")
const repeatpassword = document.getElementById("repeatpassword")
const signUpBtn = document.getElementById('sign-up-btn')

function handlerSignUp(event){
    event.preventDefault();

    let fullnameValue = fullname.value;
    let emailValue = email.value;
    let phoneValue = phone.value;
    let DateOfBirthValue = DateOfBirth.value;
    let passwordValue = password.value;
    let passwordRepeatValue = repeatpassword.value;

    if(!fullnameValue || !emailValue|| !phoneValue ||
        !DateOfBirthValue || !passwordValue|| !passwordRepeatValue){
        alert("Phải điền đủ các trường hợp")    
        return  ;
    }
    if(passwordValue != passwordRepeatValue){
        alert(' Mật Khẩu không khớp ');
        return  ;
    }

    let userAccount = {
        fullname:fullnameValue,
        email: emailValue,
        phone: phoneValue,
        DateOfBirth: DateOfBirthValue,
        password:passwordValue
    }
    localStorage.setItem("user-account",JSON.stringify(userAccount))

}
   


signUpBtn.addEventListener('click',function(event){
    alert('siuuuuuuuu')
    handlerSignUp(event)
    alert('Đăng ký thành công')
})

