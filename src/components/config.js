export const canvas = document.getElementById('game');
export const ctx = canvas.getContext('2d');

export const game = {
    gravity: 1,
    speed: 15,
    score: 0,
    highScore: 0,
    obstacles: [],
    speedInc: .003,
    speedMax: 30,
    initialTimer: 100,
    spawnTimer: 100,
}