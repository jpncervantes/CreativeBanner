//headphone movement

const headphone = document.getElementById("headphone");

headphone.addEventListener(
    "mousemove",
    (calculateMousePosition = (e) => {
        var x = e.clientX;
        var y = e.clientY;
        headphone.style.left = x + px;
    })
);

const firstFrame = document.getElementById("first");

setTimeout(() => {
    firstFrame.style.display = "none";
}, 6000);

const mainbanner = document.getElementById("main-banner");

// setInterval(() => {
//     document.getElementById("main-banner").innerHTML = mainbanner;
// }, 8000);

// $(document).ready(function () {
//     setInterval(function () {
//         $("#main-banner").load(window.location.href + " refresh", function () {
//             console.log("loaded");
//         });
//     }, 7000);
// });

setInterval(() => {
    window.location.reload(1)
}, 10000);