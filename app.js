padwrapper = document.querySelector(".pad-wrapper");
pad = document.querySelector(".pad");
paddrag = document.querySelector(".pad-header");

padform = document.querySelector(".pad-form");

drag = false;
offsetX = 0;
offsetY = 0;

wrapperheight = padwrapper.offsetHeight;
wrapperwidth = padwrapper.offsetWidth;
padheight = pad.offsetHeight;
padwidth = pad.offsetWidth;
obj = "";

padform.addEventListener("submit", (evt) => {
    evt.preventDefault();
})

paddrag.addEventListener("mousedown", (evt) => {
    drag = true;
    obj = evt.target;
    offsetX = evt.clientX - pad.offsetLeft;
    offsetY = evt.clientY - pad.offsetTop;
})

paddrag.addEventListener("mouseup", (evt) => {
    drag = false;
    obj = evt.target;
    offsetX = evt.clientX - pad.offsetLeft;
    offsetY = evt.clientY - pad.offsetTop;
});

window.addEventListener("resize", (evt) => {
    wrapperheight = padwrapper.offsetHeight;
    wrapperwidth = padwrapper.offsetWidth;
});

document.addEventListener("mousemove", (evt) => {
    if (drag) {
        pad.style.left = `${evt.clientX - offsetX}px`;
        pad.style.top = `${evt.clientY - offsetY}px`;
        posXcheck();
        posYcheck();
    }
});

function posXcheck() {
    if(pad.offsetLeft > wrapperwidth - padwidth) {
        pad.style.left = wrapperwidth - padwidth + "px";
    }
    if(pad.offsetLeft < 0) {
        pad.style.left = 0 + "px";
    }
}

function posYcheck() {
    if(pad.offsetTop < 0) {
        pad.style.top = 0 + "px";
    }
    if(pad.offsetTop > wrapperheight - padheight) {
        pad.style.top = wrapperheight - padheight + "px";
    }
}
