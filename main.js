import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import db from './src/Config/db.js';
import healthRoute from './src/Routes/health.js';
import tagRoute from './src/Routes/tag.js';
import userRoute from './src/Routes/user.js';
import qrRoute from './src/Routes/qrcode.js';

const app = express();

dotenv.config();
const port = process.env.PORT;

db.sync();

app.disable("x-powered-by");
app.use(bodyParser.json());
app.use('/todo/api/v1', healthRoute)
app.use('/todo/api/v1/tags', tagRoute);
app.use('/todo/api/v1/users', userRoute);
app.use('/todo/api/v1/qr', qrRoute);
//Tag Create
app.listen(port);
