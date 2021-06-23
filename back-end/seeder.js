process.env.DEBUG = 'mongo-seeding';
const { Seeder } = require('mongo-seeding');
const path = require('path');
const {mongoURI} = require('./config');

const config = {
  database: mongoURI,
  dropCollections: true,
};

async function seedDB() {
  const seeder = new Seeder(config);
  const collections = seeder.readCollectionsFromPath(path.resolve("./data"));
  try {
    await seeder.import(collections);
  } 
  catch (err) {
    console.log(err);
  }
}

seedDB();