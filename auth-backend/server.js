const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { makeNewToken, verifyToken, TokenExpiredError } = require( './token-service' );
const app = express();
const PORT = 5000;
const VALID_USER = {
  email: 'test',
  password: '432!',
  user: {
    name: 'John',
    lastName: 'Doe'
  }
}

app.use(bodyParser.json())

app.use(cors());

app.post('/login', (req, res) => {
  const {email, password} = req.body;
  if(email+password === VALID_USER.email+VALID_USER.password) {
    return res.json({
      ...VALID_USER.user,
      token: makeNewToken(VALID_USER.user)
    })
  }
  res.status(401).json({message: 'Invalid Credentials'})
})

app.get('/user', (req, res) => {
  const authToken = req.header('authorization');
  if(authToken) {
    try {
      const payload = verifyToken(authToken);
      return res.json(payload);
    } catch (e) {
      if(e instanceof TokenExpiredError) {
        return res.status(401).json({message: 'Token Expired'});
      }
    }
  }
  res.status(403).json({message: 'Not allowed'});
})

app.all('**', (req, res) => {
  res.status(404).json({message: 'Resource does not Exist'});
})
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({message: 'Internal Server Error'});
})

app.listen(PORT, () => {
  console.log('Authorization Server is listening on port', PORT)
})
