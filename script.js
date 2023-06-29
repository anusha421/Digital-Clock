document.addEventListener('DOMContentLoaded', () => {
    const stop_btn = document.querySelector(".stop");
    const start_btn = document.querySelector(".start");
    let interval;
    
    start_btn.addEventListener('click', () => {
        interval = setInterval(updateTime, 1000);
    })
    stop_btn.addEventListener('click', () => {
        clearInterval(interval);
    })

})

function updateTime() {
    const obj = new Date();
    const clock = document.querySelector(".clock");
    const date = document.querySelector(".date");

    clock.innerHTML = `${obj.toLocaleTimeString()}`;
    date.innerHTML = `${obj.toDateString().slice(4)}`;
}