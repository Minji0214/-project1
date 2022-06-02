const emailInput = document.querySelector('.email');
const alertBox = document.querySelector('.alertemail');
const inputForm = document.querySelector('.input-box')
const btn = document.querySelector('.btn')

function emailSubmit(event) {
    event.preventDefault();
    const email = emailInput.value;
    emailInput.value = "";
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
        })
    } else {
        colorChange()
    }
}

inputForm.addEventListener("submit", emailSubmit)

function colorChange() {
    emailInput.style.borderColor = "tomato";
    alertBox.innerHTML = `이메일을 입력해주세요`;
}