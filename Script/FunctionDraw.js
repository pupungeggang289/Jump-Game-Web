function drawBackground() {
    context.drawImage(img.background, Math.floor(backgroundX - 640), 0);
    context.drawImage(img.background, Math.floor(backgroundX), 0);
    context.drawImage(img.background, Math.floor(backgroundX + 640), 0);
}

function drawField() {
    for (let i = 0; i < field.floor.length; i++) {
        context.drawImage(img.floor, Math.floor(field.floor[i][0] - camera.x), Math.floor(field.floor[i][1] - camera.y));
    }

    if (state === 'Countdown' || state === 'Gameover') {
        for (let i = 0; i < field.coin.length; i++) {
            context.drawImage(img.coin[0], Math.floor(field.coin[i][0] - camera.x), Math.floor(field.coin[i][1] - camera.y));
        }
    } else if (state === 'Running') {
        let frameTime = gameTime - Math.floor(gameTime / 0.4) * 0.4;
        let frameNum = Math.min(Math.floor(frameTime / 0.1), 3);

        if (frameNum < 0) {
            frameNum = 0;
        }

        for (let i = 0; i < field.coin.length; i++) {
            context.drawImage(img.coin[frameNum], Math.floor(field.coin[i][0] - camera.x), Math.floor(field.coin[i][1] - camera.y));
        }
    }
}

function drawPlayer() {
    if (state === 'Countdown' || state === 'Gameover') {
        context.drawImage(img.player[0], Math.floor(player.x - camera.x), Math.floor(player.y - camera.y));   
    } else if (state === 'Running') {
        let frameTime = gameTime - Math.floor(gameTime / 0.25) * 0.25;
        let frameNum = Math.min(Math.floor(frameTime / 0.05), 4);

        if (frameNum < 0) {
            frameNum = 0;
        }

        context.drawImage(img.player[frameNum], Math.floor(player.x - camera.x), Math.floor(player.y - camera.y));
    }
}
