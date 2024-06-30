
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const servicesRoutes = require('./routes/services');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/servicecall', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/services', servicesRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
