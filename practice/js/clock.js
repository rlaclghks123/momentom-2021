const clock12 = document.querySelector("#clock12");
const clock24 = document.querySelector("#clock24");
const checkbox = document.querySelector(".checkbox");





function handleClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    clock24.innerHTML = `${hour} : ${minute} : ${second} `;
    if (hour > 12) {
        clock12.innerHTML = `${hour - 12} : ${minute}  Pm `;
    } else {
        clock12.innerHTML = `${hour - 12} : ${minute} : ${second} Am `;
    }


}


handleClock();
setInterval(handleClock, 1000);
