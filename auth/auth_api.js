const Users = require('./../model/userModel')


const genKey = () => {
  //create a base-36 string that is always 30 chars long a-z0-9
  // 'an0qrr5i9u0q4km27hv2hue3ywx3uu'
  return [...Array(30)]
    .map((e) => ((Math.random() * 36) | 0).toString(36))
    .join('');
};

const createUser = async (_email, req) => {
  let newUser = {
    api_key: genKey(),
    email: _email,
    host: req.headers.origin
  };
  //When the developer registers a key, they typically provide a hostname where the key will
  // be used. We are getting that value from req.headers.origin which is what my browser sent
  await Users.create(newUser);
  return newUser
};

const validateKey = async (req, res, next) => {
  //Where is the API key expected to be?
  let host = req.headers.origin;
  let api_key = req.header('x-api-key'); //set api-key in header

  let account = await Users.findOne( {api_key} ).select(host);
  if (account) {
    //good match
      next();
  } else {
    //stop and respond
    res.status(403).send({ error: { code: 403, message: 'invalid API key' } });
  }
};

module.exports = { createUser, validateKey };
