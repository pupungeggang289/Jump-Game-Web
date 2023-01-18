function generateField() {
    field.line = [[0, 320, 640, 320]];
    field.floor = [[0, 320], [40, 320], [80, 320], [120, 320], [160, 320], [200, 320], [240, 320], [280, 320], [320, 320], [360, 320], [400, 320], [440, 320], [480, 320], [520, 320], [560, 320], [600, 320]];
    field.coin = [[120, 280], [280, 280], [440, 280], [600, 280]];
    field.spike = [[360, 240]];
    field.numMapGenerated = 1;
}

function generateFieldAdditional() {
    if (camera.x + 640 >= field.numMapGenerated * 640) {
        let seed = Math.floor(Math.random() * 3);
        let tempLine = JSON.parse(JSON.stringify(mapData[seed].line));
        let tempFloor = JSON.parse(JSON.stringify(mapData[seed].floor));
        let tempCoin = JSON.parse(JSON.stringify(mapData[seed].coin));
        let tempSpike = JSON.parse(JSON.stringify(mapData[seed].spike));

        for (let i = 0; i < tempLine.length; i++) {
            tempLine[i][0] += field.numMapGenerated * 640;
            tempLine[i][2] += field.numMapGenerated * 640;
        }

        for (let i = 0; i < tempFloor.length; i++) {
            tempFloor[i][0] += field.numMapGenerated * 640;
        }

        for (let i = 0; i < tempCoin.length; i++) {
            tempCoin[i][0] += field.numMapGenerated * 640;
        }

        for (let i = 0; i <tempSpike.length; i++) {
            tempSpike[i][0] += field.numMapGenerated * 640;
        }

        field.line = field.line.concat(tempLine);
        field.floor = field.floor.concat(tempFloor);
        field.coin = field.coin.concat(tempCoin);
        field.spike = field.spike.concat(tempSpike);

        field.numMapGenerated += 1;
    }
}

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

function moveCamera() {
    camera.x += player.speed * delta / 1000;  
}

function movePlayer() {
    player.x += player.speed * delta / 1000;
    player.y += player.ySpeed * delta / 1000;
}

function applyGravity() {
    let nextFrameX = player.x + player.speed * delta / 1000;
    let nextFrameY = player.y + player.ySpeed * delta / 1000;

    let playerLeft = nextFrameX;
    let playerRight = nextFrameX + 40;
    let playerTop = nextFrameY;
    let playerFloor = nextFrameY + 40;

    let ground = false

    if (player.ySpeed > 0) {
        for (let i = 0; i < field.line.length; i++) {
            if (playerTop <= field.line[i][1] && field.line[i][1] <= playerFloor && playerRight >= field.line[i][0] && playerLeft <= field.line[i][2]) {
                player.y = field.line[i][1] - 40;
                player.ySpeed = 0;
                ground = true;
                player.jump = 2;
            }
        }

        if (ground === false) {
            player.ySpeed += 800 * delta / 1000;
        }
    } else {
        player.ySpeed += 800 * delta / 1000;
    }
}

function addScore() {
    score += 10 * delta / 1000;
}

function coinCollect() {
    let i = 0;

    while (i < field.coin.length) {
        if (Math.abs(field.coin[i][0] - player.x) < 40 && Math.abs(field.coin[i][1] - player.y) < 40) {
            coin += 1;
            field.coin.splice(i, 1);
        } else {
            i++;
        }
    }
}

function deleteOutOfMap() {
    let i = 0;

    while (i < field.floor.length) {
        if (field.floor[i][0] - camera.x < -40) {
            field.floor.splice(i, 1);
        } else {
            i++;
        }
    }

    i = 0;

    while (i < field.coin.length) {
        if (field.coin[i][0] - camera.x < -40) {
            field.coin.splice(i, 1);
        } else {
            i++;
        }
    }

    i = 0;

    while (i < field.line.length) {
        if (field.line[i][2] - camera.x < -40) {
            field.line.splice(i, 1);
        } else {
            i++;
        }
    }
}

function jumpTry() {
    if (player.jump > 0) {
        player.jump -= 1;
        player.ySpeed = -400;
    }
}

function gameOverCheck() {
    if (player.y >= 360) {
        state = 'Gameover';
        inputEnabled = false;
        inputCountdown = 1;
    }

    let i = 0;

    for (let i = 0; i < field.spike.length; i++) {
        if (Math.abs(player.x - field.spike[i][0]) < 40 && Math.abs(player.y - field.spike[i][1]) < 80) {
            state = 'Gameover';
            inputEnabled = false;
            inputCountdown = 1;
        }
    }
}

function gameOverCountDown() {
    if (inputCountdown < 0) {
        inputEnabled = true;
    } else {
        inputCountdown -= delta / 1000;
    }
}
