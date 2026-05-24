import express from "express";

//PORT
const port = process.env.PORT || 8000;

//app
const app = express();
app.disable("x-powered-by");

//Server Listening
app.listen(port, () => {
  console.log(`Server Listening On PORT: ${port}`);
});
