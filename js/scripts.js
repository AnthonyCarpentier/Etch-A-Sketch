// This controls the amount of pixels for the width/height
let pixelCountWidth = 16;

let container = document.querySelector(`#container`);

let wrapper = document.querySelector(`.wrapper`);
wrapper.style.gridTemplateColumns = `repeat( `+ pixelCountWidth + `, 1fr)`;
wrapper.style.gridTemplateRows = `repeat( `+ pixelCountWidth + `, 1fr)`;



function drawPlayableArea (pixelCountWidth) {
    for (i = 0; i < (pixelCountWidth * pixelCountWidth); i++) {
        let drawablePixel = document.createElement(`div`);
        drawablePixel.classList.add(`drawablePixel`);

        container.appendChild(drawablePixel);
    }

    let drawablePixels = container.querySelectorAll(`div`);
    drawablePixels.forEach(drawablePixel => { 
        drawablePixel.addEventListener(`mouseover`, function () {
            drawablePixel.style.backgroundColor = `white`;
    })
});
}

function resetPlayableArea () {
    for (i = 0; i < (pixelCountWidth * pixelCountWidth); i++) {
        let drawablePixels = container.querySelectorAll(`div`);
    
        drawablePixels.forEach(drawablePixel => { 
        drawablePixel.remove();
    });
    }
}

drawPlayableArea(pixelCountWidth);



let btn = document.querySelector(`#clearBtn`);
btn.addEventListener(`click`, resetBoard);

function resetBoard() {
    let drawablePixels = container.querySelectorAll(`div`);
    
    drawablePixels.forEach(drawablePixel => { 
        drawablePixel.style.backgroundColor = `black`;
    });

    let newPixelCountWidth = prompt(`Please enter the numeric value of pixels you want per side(default is 16, max is 100)`);
    if (newPixelCountWidth > 100) {
        newPixelCountWidth = 100
    }
    resetPlayableArea();
    drawPlayableArea(newPixelCountWidth);
    pixelCountWidth = newPixelCountWidth;

    let wrapper = document.querySelector(`.wrapper`);
    wrapper.style.gridTemplateColumns = `repeat( `+ pixelCountWidth + `, 1fr)`;
    wrapper.style.gridTemplateRows = `repeat( `+ pixelCountWidth + `, 1fr)`;
}