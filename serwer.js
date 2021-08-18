const express = require('express');
const { MongoClient } = require('mongodb');
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

  app.get('/express_backend/projects', async (req, res) => {
    const db = await client.db('portfolio_web');
    const collection = await db.collection('projects');
    const projects = await collection.find({}).toArray();

    res.json({ status: 'ok', projects });
  });

  app.listen(port, () => console.log(`Listening on port ${port}`));
}

init();
