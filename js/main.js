 const form = document.querySelector("#message-form")

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const message = document.querySelector('.message')
    const feedback = document.querySelector('.feedback')
    const messageContent = document.querySelector('.message-content')

    if(message.value === '') {
        feedback.classList.add('show');
        setTimeout(function() {
            feedback.classList.remove('show');
        }, 2000)
    } else {
        messageContent.textContent = message.value;
        message.value = ""
    }
})


















// const input = document.querySelector(".input");
// const submitBtn = document.querySelector(".submitBtn");
// const output = document.querySelector(".output");

// const ErrorMsg = "Quote Can't be empty";
// const tooLong = "Sorry, the maximum number of caracters in your quote should not pass 30"

// submitBtn.addEventListener("click", onSubmit);

// function onSubmit() {
//     if(input.value === "") {
        
//         output.textContent = ErrorMsg;
//         // ErrorMsg.classList.add("red-error");
//     } else if(input.value.length > 25) {
        
//         output.textContent = tooLong;
//         // tooLong.classList.add("orange-error")
//     } else {
//         let quote = input.value;
//         output.textContent = quote;
//     }
// }