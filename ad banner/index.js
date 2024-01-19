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

const refreshPage = () => {
    location.reload(true);
};
