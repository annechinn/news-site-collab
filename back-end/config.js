
const dotenv = require('dotenv');
const result = dotenv.config();

if (result.error) {
  throw result.error;
}
console.log(result.parsed);

module.exports = {
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT
};