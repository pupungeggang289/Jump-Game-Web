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
        let frameTime = gameTime - Math.floor(gameTime / 0.5) * 0.5;

        if (0 <= frameTime < 0.1) {
            context.drawImage(img.player[0], Math.floor(player.x - camera.x), Math.floor(player.y - camera.y));
        } else if (0.1 <= frameTime < 0.2) {
            context.drawImage(img.player[1], Math.floor(player.x - camera.x), Math.floor(player.y - camera.y));
        } else if (0.2 <= frameTime < 0.3) {
            context.drawImage(img.player[2], Math.floor(player.x - camera.x), Math.floor(player.y - camera.y));
        } else if (0.3 <= frameTime < 0.4) {
            context.drawImage(img.player[3], Math.floor(player.x - camera.x), Math.floor(player.y - camera.y));
        } else if (0.4 <= frameTime < 0.5) {
            context.drawImage(img.player[4], Math.floor(player.x - camera.x), Math.floor(player.y - camera.y));
        }
    }
}
