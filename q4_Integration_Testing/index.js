const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { app } = require('./server');

const PORT = 3000;

async function startServer() {
  const mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  mongoose.connect(uri)
    .then(() => {
      console.log('MongoDB connected');
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    })
    .catch(err => console.error('MongoDB connection error:', err));
}

startServer();
