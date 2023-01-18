let UIGame = {
    titleText : [8, 24],
    coinIcon : [520, 0],
    coinText : [568, 28],
};

function loopGame() {
    if (state === 'Countdown') {
        manageCountDown();
    }
    
    if (state === 'Running') {
        gameTime = (Date.now() - gameStartTime) / 1000;
        generateFieldAdditional();
        moveBackground();
        movePlayer();
        applyGravity();
        moveCamera();
        gameOverCheck();
        addScore();
        coinCollect();
        deleteOutOfMap();
    }

    displayGame();
}

function displayGame() {
    context.fillStyle = 'Black';
    context.font = '24px neodgm';
    context.textAlign = 'left';

    context.clearRect(0, 0, 640, 360);

    drawBackground();

    if (state === 'Countdown') {
        context.fillText(`Starting in ${Math.ceil(countdown)} seconds...`, UIGame.titleText[0], UIGame.titleText[1]);
    } else if (state === 'Running') {
        context.fillText(`Score : ${Math.floor(score)}`, UIGame.titleText[0], UIGame.titleText[1]);
    } else if (state === 'Gameover') {
        context.fillText(`Game Over!`, UIGame.titleText[0], UIGame.titleText[1]);
    }

    drawField();
    drawPlayer();

    context.drawImage(img.coin[0], UIGame.coinIcon[0], UIGame.coinIcon[1]);
    context.fillText(`${coin}`, UIGame.coinText[0], UIGame.coinText[1]);
}

function mouseUpGame(x, y, button) {
    if (button === 0) {
        if (state === 'Running') {
            jumpTry();
        } else if (state === 'Gameover') {
            scene = 'Title';
            state = '';
        }
    }
}
