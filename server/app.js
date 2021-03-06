const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const generatorRouter = require('./generatorRouter');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const history = require('connect-history-api-fallback')

const app = express();

app.use(express.json());
app.use(cors())
app.use(history())

app.use('/auth', authRouter)
app.use('/generator', generatorRouter)

app.use('/', express.static(path.resolve(__dirname, '../dist')));
app.get('/*',(req, res) => {
  res.sendFile(path.join(__dirname + '../dist/index.html'))
})

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://dbEgor:qwerty123@forexample.qzsin.mongodb.net/testdbfollowme?retryWrites=true&w=majority`);
        app.listen(PORT, () => {
            console.log(`===================== \n  Start on port ${PORT} \n=====================`);
        })
    } catch (e){
        console.log(e);
    }
}

start().then(r => console.log('+++'));
