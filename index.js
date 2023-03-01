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
    });
}

function controlBorder() {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();
    console.log(outer.width)
    console.log(inner.width)
    console.log(inner)


    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
    } else if (parseInt(innerSlider.style.left) < -outer.width) {
        innerSlider.style.left = `-${outer.width}px `;
    }
}

window.addEventListener("mouseup", () => (pressed = false));
doEvent("mousedown", setOffset);
doEvent("mousemove", moveSlider);
