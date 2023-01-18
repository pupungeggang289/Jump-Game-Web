window.onload = main;
window.onerror = errorHandle;
window.oncontextmenu = rightClick;

function main() {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    canvasRect = canvas.getBoundingClientRect();

    canvas.addEventListener('mouseup', mouseUp, false);

    gamePreviousFrame = Date.now() - 16;
    gameCurrentFrame = Date.now();

    imageLoad();

    gameInstance = requestAnimationFrame(loop); 
}

function loop() {
    gameInstance = requestAnimationFrame(loop);
    
    gameCurrentFrame = Date.now();
    delta = gameCurrentFrame - gamePreviousFrame;

    if (scene === 'Title') {
        loopTitle();
    } else if (scene === 'Game') {
        loopGame();
    }

    gamePreviousFrame = Date.now();
}

function mouseUp(event) {
    let x = event.clientX - canvasRect.left;
    let y = event.clientY - canvasRect.top;
    let button = event.button;

    if (scene === 'Title') {
        mouseUpTitle(x, y, button);
    } else if (scene === 'Game') {
        mouseUpGame(x, y, button);
    }
}

function errorHandle() {
    cancelAnimationFrame(gameInstance);
}

function rightClick() {
    return false;
}
