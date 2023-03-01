const slider = document.querySelector(".slider");
const innerSlider = document.querySelector(".innerslider");

let pressed = false;
let startX, x;
function doEvent(evt, func) {
    func(evt);
}

function moveSlider(evt) {
    slider.addEventListener(evt, (e) => {
        x = e.offsetX;
        pressed ? (innerSlider.style.left = `${x - startX}px`) : null;
        controlBorder();
    });
}
function setOffset(evt) {
    slider.addEventListener(evt, (e) => {
        e.preventDefault();
        pressed = true;
        slider.style.cursor = "grabbing";
        startX = e.offsetX - innerSlider.offsetLeft;
        console.log(startX, x, innerSlider.style.left);
    });
}

function controlBorder() {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();
    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
    } else if (inner.width < outer.width) {
        innerSlider.style.left = `-${inner.width - outer.width}px `;
    }
}

window.addEventListener("mouseup", () => (pressed = false));
doEvent("mousedown", setOffset);
doEvent("mousemove", moveSlider);
