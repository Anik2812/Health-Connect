const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to healthconnect API');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//routes
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const symptomCheckerRouter = require('./routes/symptomChecker');
app.use('/symptom-checker', symptomCheckerRouter);

const providersRouter = require('./routes/providers');
app.use('/providers', providersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
