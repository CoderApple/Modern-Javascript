const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter((scores) =>{
//     return scores > 20;
// });

// console.log(filteredScores);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true},
];

premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);