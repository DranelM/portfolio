const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

var pswd;
try {
  pswd = require('./auth');
} catch (ex) {
  console.error('Authentication password file not detected');
}

const uri = `mongodb+srv://portfolio_front:${pswd}@cluster0.rk2p0.mongodb.net/portfolio_web?retryWrites=true&w=majority`;

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
