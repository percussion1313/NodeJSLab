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

rp(options)
    .then((body, res, err) => {
        JSON.parse(body).data.children.forEach(item => {
            let redditData = [];
            if (err) console.log(err);
            
            let redditObj = {Title: item.data.title, URL: item.data.url, Author: item.data.author}           

            redditData = redditArray.push(redditObj);

            fs.writeFileSync(redditPath,  JSON.stringify(redditArray));
        });
    }).catch((err) => {
        console.log(err)
    })


    