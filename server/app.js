const express = require('express');
const path = require('path');
const morgan = require('morgan');
const {db, People} = require('./routes/db');


const app = express();

app.use(morgan('dev'));
app.use(express.json()); //body-parser
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res, next) => {
    res.send();
});

//error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.error(err);
});

const port = 1337;
app.listen(port, () => {
    console.log(`listening on port ${port}!`);
}); 

const syncMe = (async() => {
    await db.sync({force:false});
})();
