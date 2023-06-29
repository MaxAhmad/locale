const http = require("http");
const app = require("./app");

const dotenv = require('dotenv');
const mongoose = require('mongoose')

dotenv.config({ path: './config.env'});

const DB = process.env.DATABASE
mongoose.connect(DB, {}).then(() => {
    console.log('connected to DB')
})


const server = http.createServer(app);

const port = 5050

server.listen(port, () => {
  console.log(`listening on port:${port}`);
});