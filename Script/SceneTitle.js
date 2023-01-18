let UITitle = {
    titleText : [8, 24],
    startButton : [240, 200, 160, 80],
    startText : [320, 246],
};

function loopTitle() {
    displayTitle();
}

function displayTitle() {
    context.fillStyle = 'Black';
    context.font = '24px neodgm';
    context.textAlign = 'left';

    context.clearRect(0, 0, 640, 360);
    context.drawImage(img.background, 0, 0);

    context.fillText('Sample Jump Game', UITitle.titleText[0], UITitle.titleText[1]);
    context.drawImage(img.startButton, UITitle.startButton[0], UITitle.startButton[1]);
    context.textAlign = 'center';
    context.fillText('Start', UITitle.startText[0], UITitle.startText[1]);
}

function mouseUpTitle(x, y, button) {
    if (button === 0) {
        if (pointInsideRectArray(x, y, UITitle.startButton)) {
            scene = 'Game';
            state = 'Countdown';
            score = 0;
            countdown = 3;
            player.x = 40;
            player.y = 280;
        }
    }
}
