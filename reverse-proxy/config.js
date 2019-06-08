// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  PORT: process.env.PORT,
  TARGETPORT: process.env.TARGETPORT,
  TARGET: process.env.TARGET
};