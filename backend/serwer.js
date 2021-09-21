const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

let uri;
try {
  uri = process.env.MONGO_URL;
} catch (ex) {
  console.error('MongoDB Url not found');
}

const port = process.env.PORT || 5000;

async function init() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  const app = express();

  app.use(express.static(path.join(__dirname, '../build')));

  app.get('/express_backend/projects', async (req, res) => {
    const db = client.db('portfolio_web');
    const collection = db.collection('projects');
    const projects = await collection.find({}).toArray();

    res.json({ status: 'ok', projects });
  });

  app.get('*', (req, res) => {
    res.send(express.static(path.join(__dirname, '../build/index.html')));
  });

  app.listen(port, () => console.log(`Listening on port ${port}`));
}

init();
