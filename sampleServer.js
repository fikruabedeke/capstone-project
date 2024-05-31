/*const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
const dbo = require("./db/conn");

(async () => {
    try {
      await dbo.connectToServer();
      app.listen(port, async () => {
        // HERE IS WHERE I CALL THE FUNCTION
        console.log(`Server is running on port: ${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  })();*/