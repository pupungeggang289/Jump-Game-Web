function drawBackground() {
    context.drawImage(img.background, Math.floor(backgroundX - 640), 0);
    context.drawImage(img.background, Math.floor(backgroundX), 0);
    context.drawImage(img.background, Math.floor(backgroundX + 640), 0);
}

function moveCamera() {
    camera.x += player.speed * delta / 1000;  
}

function drawPlayer() {
    if (state === 'Countdown') {
        context.drawImage(img.player[0], Math.floor(player.x - camera.x), Math.floor(player.y - camera.y));   
    } else if (state === 'Running') {
        let frameTime = gameTime - Math.floor(gameTime / 0.25) * 0.25;
        let frameNum = Math.floor(frameTime / 0.05);

        context.drawImage(img.player[frameNum], Math.floor(player.x - camera.x), Math.floor(player.y - camera.y));
    }
}
