require ("./connection/conn");
const express = require('express');
const cors = require("cors");
const userRoute =require ('./routes/user.js')
const docsRoute =require ('./routes/docs.js')
const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.use("/api/user",userRoute );
app.use("/api/docs", docsRoute);

app.get("/", async (req, res) => {
  res.send("hello from server !");
});

 
   
    app.listen(8000, () =>
      console.log("Server start on Port http://localhost:8000 ")
    );
 


