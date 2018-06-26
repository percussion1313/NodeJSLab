const path = require('path');
const fs = require('fs');
const request = require('request');

let dataPath = path.join(__dirname, '../chirps.json');

let chirps = [
    {
        chirp: 'Hello?',
        user: 'John Doe'
    },
    {
        chirp: 'Where is everyone?',
        user: 'John Doe'
    },
    {
        chirp: 'CAN ANYONE HEAR ME??',
        user: 'John Doe'
    },
    {
        chirp: '...I am so alone',
        user: 'John Doe'
    },
    {
        chirp: '......',
        user: 'John Doe'
    }
]

require('fs').writeFile(dataPath,

    JSON.stringify(chirps),

    function (err) {
        if (err) {
            console.error('what went wrong');
        }
    }
);

console.log(JSON.stringify(chirps))

