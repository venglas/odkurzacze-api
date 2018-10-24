import express from 'express';
import { join } from 'path';
import config from './config/config';
import cors from 'cors';

//routes
import slider from './routes/slider';
//

import { notFound, catchErrors } from './middlewares/errors';
import bodyParser from 'body-parser';
import register from 'babel-core/register';
import babelPolyfill from 'babel-polyfill';

// Connect to database
import dbConfig from './config/database';
import mongoose from 'mongoose';

mongoose.connect(dbConfig.mongoUrl, {useNewParser: true});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

const app = express();

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes config

// Config under this comment if for CORS

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/slider', slider());
// ...

// errors handling
app.use(notFound);
app.use(catchErrors);

// let's play!
app.listen(config.server.port, () => {
    console.log(`Server is up!`);
});