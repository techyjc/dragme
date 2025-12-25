padwrapper = document.querySelector(".pad-wrapper");

//Updated Vars
pad = document.querySelectorAll(".pad");
paddrag = document.querySelectorAll(".pad-header");

padform = document.querySelector(".pad-form");

drag = false;
offsetX = 0;
offsetY = 0;

wrapperheight = padwrapper.offsetHeight;
wrapperwidth = padwrapper.offsetWidth;
padheight = 300; //pad.offsetHeight;
padwidth = 260; //pad.offsetWidth;
obj = "";

paddrag.forEach(function (element, index) {
    element.addEventListener("mouseover", (evt) => {
        removetopmost();
        obj = evt.target.parentNode;
        obj.classList.add("top-most");
    });
    // if(element.parentNode.classList.contains("pad")){
    //     console.log('Yes');
    // }
    element.addEventListener("mousedown", (evt) => {
        drag = true;
        console.log(evt.target);
        obj = evt.target.parentNode;
        obj.classList.add("top-most");
        offsetX = evt.clientX - obj.offsetLeft;
        offsetY = evt.clientY - obj.offsetTop;
    });
    element.addEventListener("mouseup", (evt) => {
        drag = false;
        obj = evt.target.parentNode;
        offsetX = evt.clientX - obj.offsetLeft;
        offsetY = evt.clientY - obj.offsetTop;
    });
    document.addEventListener("mousemove", (evt) => {
        if (drag) {
            obj.style.left = `${evt.clientX - offsetX}px`;
            obj.style.top = `${evt.clientY - offsetY}px`;
            posXcheck(obj);
            posYcheck(obj);
        }
    });
});

window.addEventListener("resize", (evt) => {
    wrapperheight = padwrapper.offsetHeight;
    wrapperwidth = padwrapper.offsetWidth;
});

function posXcheck(obj) {
    if (obj.offsetLeft > wrapperwidth - padwidth) {
        obj.style.left = wrapperwidth - padwidth + "px";
    }
    if (obj.offsetLeft < 0) {
        obj.style.left = 0 + "px";
    }
}

function posYcheck(obj) {
    if (obj.offsetTop < 0) {
        obj.style.top = 0 + "px";
    }
    if (obj.offsetTop > wrapperheight - padheight) {
        obj.style.top = wrapperheight - padheight + "px";
    }
}

function removetopmost() {
    pad.forEach(function (elmt) {
        elmt.classList.remove("top-most");
    });
}

function updatenotes() {
    padwrapper.innerHTML = `
    <div class="pad color4">
        <div class="pad-header">
           <span>Drag Me</span>
        </div>
        <div class="pad-content">
            <p>
                An experimental notepad with drag drop features. This is work in progress so some features and UI are not working yet.
            </p>
        </div>
    </div>`;
}
