const server = require("./http/httpServer");
const secrets = require("./secrets");
const db = require("./database/models");

const io = require('./socketIO')

io;

const PORT = secrets.port;

// server.listen(PORT, () => {
//   console.log(`\n *** Server Running on http://localhost:${PORT} ***\n`);
// });
