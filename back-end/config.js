
const dotenv = require('dotenv');
const result = dotenv.config({
    path: `${__dirname}/.env`
  });

if (result.error) {
  throw result.error;
}
console.log(result.parsed);

module.exports = {
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT
};