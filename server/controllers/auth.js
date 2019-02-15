const bcrypt = require("bcryptjs");

module.exports = {
  // register will write user info to the database, encrypt the password, and store user into session.
  register: async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const { session } = req;
    const db = req.app.get("db");
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    let newUser = await db.users.register({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hash
    });
    newUser = newUser[0];
    session.user = { ...newUser };
    res.status(201).send(session.user);
  },
  //
  login: async (req, res) => {
    const { email, password } = req.body;
    const { session } = req;
    const db = req.app.get("db");
    let user = await db.users.login({ email: email });
    user = user[0];
    if (!user) {
      return res.sendStatus(402);
    }
    const correctPassword = bcrypt.compareSync(password, user.password);
    if (correctPassword) {
      delete user.password;
      session.user = {...user}
      res.status(200).send(session.user);
    } else {
      res.sendStatus(401);
    }
  },
  logout: (req, res) => {
    console.log('logout hit')
    req.session.destroy();
    res.sendStatus(200);
  },
  getUser: (req, res) => {
    const { user } = req.session;
    if (user) {
      res.status(200).send(user);
    } else {
      res.sendStatus(401);
    }
  }
};
