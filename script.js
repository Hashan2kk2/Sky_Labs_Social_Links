let popupState = 0;
let emailAddress = document.getElementById("alertBox");
function popupMsg() {
    navigator.clipboard.writeText("hashan.lakruwan2020@gmail.com").then(() => {
        if (popupState == 0) {
            emailAddress.classList.remove("d-none");
            emailAddress.classList.add("view-alert");
            popupState = 1;
        }
    });

}

// function iterateNumbers() {
//     var number = 0;

//     var intervalId = setInterval(function () {
//         console.log(number);
//         number++;

//         if (number > 100) {
//             clearInterval(intervalId);
//         }
//     }, 100); // Change the interval time (in milliseconds) as needed
// }

function m() {
    if (popupState == 1) {
        emailAddress.classList.remove("view-alert");
        emailAddress.classList.add("d-none");
        popupState = 0;
    }
}