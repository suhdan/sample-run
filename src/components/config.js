export const canvas = document.getElementById('game');
export const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

export const game = {
    gravity: 1,
    speed: 10,
    frame: 0,
    score: 0,
    highScore: 0,
    level: 1,
    levelInc: 500,
    obstacles: [],
    speedInc: .25,
    speedMax: 30,
    initialTimer: 100,
    spawnTimer: 100,
    over: false
}