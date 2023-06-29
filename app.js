const express = require("express");
const rateLimit = require("express-rate-limit");

const stateRouter = require("./routes/statesRoute");
const { createUser, validateKey } = require("./auth/auth_api");

const app = express();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 Mins
  max: 100,
});
app.use(limiter);

app.use(express.json());
app.use("/api/v1", validateKey, stateRouter);

// Serving static files
app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/api/register", async (req, res) => {
  let email = req.body.email;
  let user = await createUser(email, req);
  res.status(201).send({ data: { api_key: user.api_key } });
});

module.exports = app;
