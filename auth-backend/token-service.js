const jwt = require('jsonwebtoken');
const secretSalt = 'qwe6tus376r1672512j381671b82et87612';

module.exports = {
  makeNewToken(user) {
    return jwt.sign(user, secretSalt, { expiresIn: '5m' });
  },
  verifyToken(token) {
    return jwt.verify(token, secretSalt);
  },
  TokenExpiredError: jwt.TokenExpiredError
}
