const path = require('path');
const fs = require('fs');
const rp = require('request-promise');
const err = `Why can't this work!`

let redditPath = path.join(__dirname, './popular-articles.json');

const options = {
    method: 'GET',
    uri: 'https://reddit.com/r/popular.json'
  }

rp(options)
    .then((results) => {
        JSON.parse(results).data.children.forEach(item => {
            
            let redditArray = [];
            let redditObj = {Title: item.data.title, URL: item.data.url, Author: item.data.author}           
            redditArray.push(redditObj)

            fs.writeFileSync(redditPath,  JSON.stringify(redditArray));
        });
    }).catch((err) => {
        console.log(err)
    })


    