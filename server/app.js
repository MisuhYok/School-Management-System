if (process.env.NODE_ENV === 'development') {
	require('dotenv').config();
}

const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');

app.use(cors());
app.use(morgan('dev'));

app.use(router);

app.listen(process.env.PORT, () => console.log(`This app is running on port ${process.env.PORT}`));