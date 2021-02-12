#! /usr/bin/env node

"use strict";

const fetch = require('node-fetch')
const argv = require('yargs/yargs')(process.argv.slice(2))
    .usage(
        `
Usage - 1(POSIX based env):        ./$0 [option] [word]

Usage - 2(Windows based env):      node $0 [option] [word]


Argument meaning:

[word] argument is the word you're looking to access this thesaurus with.
[option] argument has many options.


[option] available:

--syn               to find the meaning of the word
--ant               to find the antonyms
--similarsound      to find the words that sound similar when pronounced
--similarspell      to find the words having similar spellings

Example usage: to find the synonyms of word 'hope',

Usage - 1:        $ ./main.js --syn hope
Usage - 2:        > node main.js --syn hope
`
    )
    .version('0.0.1')
    .argv

const url = 'https://api.datamuse.com/'

fetch('https://api.datamuse.com/words?max=5&ml=nice')
    .then(res => res.json())
    .then(displayWords)


/***************************** */
function displayWords(array) {
    for (let word of array) {
        console.log(word.word)
    }
}

function findSynonyms(word) {
    // TODO: add logic to find word synonyms
}

function findAntonyms(word) {
    // TODO: add logic to find word antonyms
}

function findSimilarSounds(word) {
    // TODO: add logic to find similar sounding words
}

function findSimilarSpells(word) {
    // TODO: add logic to find similar spelled words
}