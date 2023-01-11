const clock = document.querySelector('#clock');

function handleClock() {
  const date = new Date();

  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  hour > 12
    ? (clock.innerText = `${hour - 12}:${minute}:${seconds} PM`)
    : (clock.innerHTML = `${hour} : ${minute} : ${seconds} AM`);
}

handleClock();
setInterval(handleClock, 1000);
