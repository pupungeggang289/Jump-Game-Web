let img = {
    player : [new Image(), new Image(), new Image(), new Image(), new Image()],
    coin : [new Image(), new Image(), new Image(), new Image()],
    background : new Image(),
    startButton : new Image(),
};

function imageLoad() {
    img.player[0].src = 'Image/Character01.png';
    img.player[1].src = 'Image/Character02.png';
    img.player[2].src = 'Image/Character03.png';
    img.player[3].src = 'Image/Character04.png';
    img.player[4].src = 'Image/Character05.png';

    img.coin[0].src = 'Image/Coin01.png';
    img.coin[1].src = 'Image/Coin02.png';
    img.coin[2].src = 'Image/Coin03.png';
    img.coin[3].src = 'Image/Coin04.png';

    img.background.src = 'Image/BackGround.png';

    img.startButton.src = 'Image/StartButton.png';
}
