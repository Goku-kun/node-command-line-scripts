#! /usr/bin/env node

"use strict";

const argv = require('yargs/yargs')(process.argv.slice(2))
    .command('[option]')
    .usage(`
Usage: node $0 [option]       where option could be r,p or s.

If more than one options specified only the first shall be considered as the legitimate input.`)
    .argv;

((player, computer) => {
    const mapper = {
        r: 0,
        p: 1,
        s: 2
    }
    const playerNumber = mapper[player]
    if (playerNumber === computer) {
        console.log('It\'s a draw');
        return
    }
    if (playerNumber === 0 && computer === 2) {
        console.log('Player wins! Rock vs Scissors');
    } else if (playerNumber === 1 && computer === 0) {
        console.log('Player wins! Paper vs Rock');
    } else if (playerNumber === 2 && computer === 1) {
        console.log('Player wins! Rock vs Paper')
    } else {
        console.log('Computer wins!')
    }

})(argv._[0], randomGenerator())



// **********************************

function randomGenerator() {
    return Math.floor(Math.random() * 3);
}