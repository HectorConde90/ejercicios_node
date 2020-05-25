const superheroes = require('superheroes');
const chalk = require('chalk');

const superhero = superheroes.random();


console.log(chalk.blue(superhero));