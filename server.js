const express = require("express");
const app = express();

const port = 3000;
let count = 0;

app.set('view engine','ejs');


//set up routes
app.get('/', (req,res,next) => {
    let startCount = 99;
    count = startCount;
    res.render('index', {text: `${count} bottles of beer on the wall`, linkText: 'take one down, pass it around!', link: '/:numOfBottles'});

})

app.get('/:numOfBottles', (req,res) => {
    if(count <= 0)
    {
        res.render('index', {text: `${count} bottles of beer on the wall.`, linkText:'start over', link: '/'})
    }
    count--;
    req.params.numOfBottles = count;
    res.render('index', {text: `${req.params.numOfBottles} bottles of beer on the wall.`, linkText: 'take one down, pass it around!', link: '/:numOfBottles'});
})















app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
