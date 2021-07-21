import http from 'http';
import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import routes from './server/routes';

dotenv.config();
const app = express();
const server = http.createServer(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
routes(app);

/* eslint-disable no-console */
server.listen(process.env.PORT, process.env.HOST, () => {
    console.info(`Server running at http://${process.env.HOST}:${process.env.PORT}/`);
});

export default server;
