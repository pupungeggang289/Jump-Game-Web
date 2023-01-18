function manageCountDown() {
    if (countdown <= 0) {
        state = 'Running';
        gameStartTime = Date.now();
    } else {
        countdown -= delta / 1000;
    }
}

function moveBackground() {
    if (backgroundX - backgroundSpeed * delta / 1000 <= -640) {
        backgroundX -= backgroundSpeed * delta / 1000;
        backgroundX += 640;
    } else {
        backgroundX -= backgroundSpeed * delta / 1000;
    }
}

function jumpTry() {
}
