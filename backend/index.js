const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 8000;
const cors=require('cors')
const authRouter=require('./routes/authRouter');
require('./models/dbConnection');


app.use(cors({ origin: 'http://localhost:5173' }));


app.get('/', (req, res) => {
  res.send('Hello from Auth server');
});


app.use('/auth', authRouter)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});



