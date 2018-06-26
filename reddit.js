const path = require('path');
const fs = require('fs');
const rp = require('request-promise');
const err = `Why can't this work!`

let redditPath = path.join(__dirname, './popular-articles.json');

const options = {
    method: 'GET',
    uri: 'https://reddit.com/r/popular.json'
}


let redditArray = [];

rp(options, (err, res, body) => {
    
    let redditData = [];
    if (err) console.log(err);

    redditData = JSON.parse(body).data.children.forEach(item => {
        redditArray.push({
            "title": item.data.title,
            "author": item.data.author,
            "url": item.data.url
        });
})

    fs.writeFileSync(redditPath, JSON.stringify(redditArray), err => {
        if (err) console.log(err)
    });
});



