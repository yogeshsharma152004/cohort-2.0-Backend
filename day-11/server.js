require("dotenv").config();
const app = require("./src/app");
const dns = require("dns");
const connectToDb = require("./src/config/database");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

connectToDb();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
