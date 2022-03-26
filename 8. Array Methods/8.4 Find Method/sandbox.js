// find method
const scores = [10, 5, 0, 40, 30, 10, 90, 70];

const firsthighscore = scores.find((score) => {
    return score > 50;
});

console.log(firsthighscore);