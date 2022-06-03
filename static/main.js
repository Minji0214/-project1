const emailInput = document.querySelector('.email');
const alertBox = document.querySelector('.alertemail');
const inputForm = document.querySelector('.input-box')

function emailSubmit(event) {
    event.preventDefault();
    const email = emailInput.value;
    if (email.includes("@")) {
        $.ajax({
            type: 'POST',
            url: '/subscribe',
            data: {
                email_give: email
            },
            success: function (response) {
                alert(response['msg'])
            }
        });
        emailInput.value = "";
    } else if(emailInput.value === '') {
        blankValidation();
    } else {errorValidation()}
}

inputForm.addEventListener("submit", emailSubmit)

function blankValidation() {
    emailInput.style.borderColor = "tomato";
    alertBox.innerHTML = `이메일을 입력해주세요`;
}
function errorValidation() {
    emailInput.style.borderColor = "tomato";
    alertBox.innerHTML = `이메일 양식에 맞게 입력해주세요`;
    emailInput.value = "";
}