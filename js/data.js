var hour = document.querySelector("#hour");
var minute = document.querySelector("#minute");
var second = document.querySelector("#second");

function sor() {
    var date = new Date();
    var hourDeg = date.getHours();
    var minuteDeg = date.getMinutes();
    var secondDeg = date.getSeconds();

    hour.style.transform = "rotate(" + (360 / 12) * hourDeg + "deg)";
    minute.style.transform =
        "rotate(" +
        (360 / 60) * minuteDeg +
        "deg)" +
        "rotate(" +
        (360 / 3600) * secondDeg +
        "deg)";
    second.style.transform = "rotate(" + (360 / 60) * secondDeg + "deg)";
}

setInterval(sor, 1000);