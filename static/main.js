const emailInput = document.querySelector('.email');
const alertBox = document.querySelector('.alertemail');
const inputForm = document.querySelector('.input-box')
const btn = document.querySelector('.btn')
const facebook = document.getElementById("facebook")
const facebook_classname="fa-facebook";

function emailSubmit (event){
   event.preventDefault();
   const email = emailInput.value;
   emailInput.value ="";
   if((email.includes("@"))===false)
   {alertBox.innerHTML = `이메일을 입력해주세요`} else{alert(`${email}`)}

   $.ajax({
    type: 'POST',
    url: '/subscribe',
    data: {email_give: email},
    success: function (response) {
        alert(response['msg'])
    }
})
}

inputForm.addEventListener("submit",emailSubmit)


