const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 8000;

const authRouter=require('./routes/authRouter');

app.get('/', (req, res) => {
  res.send('Hello from Auth server');
});


app.use('/auth', authRouter)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});



