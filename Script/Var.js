let canvas;
let context;
let canvasRect;
let gamePreviousFrame;
let gameCurrentFrame;
let gameStartTime;
let gameTime;
let gameEndTime;
let gameInstance;
let delta = 16;

let scene = 'Title';
let state = '';

let score = 0;
let coin = 0;
let countdown = 0;

let backgroundX = 0;
let backgroundSpeed = 40;

let player = {
    speed : 160,
    jump : 2,
    x : 0,
    y : 0,
    ySpeed : 0,
};

let camera = {
    x : 0,
    y : 0,
};

let field = {
    numMapGenerated : 1,
    line : [],
    floor : [],
    coin : [],
    spike : [],
    map : [],
};
