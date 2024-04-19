const mongoos = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const url =
  "mongodb+srv://sahil:lAWgjVPDYgyfyCf4@cluster0.vkp2rxq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  // process.env.MONGO_URL
mongoos
  .connect(url, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    //   useUnifiedTopology: true,
    // useFindAndModify:false
  })
  .then(() => {
    console.log("connection succcessfull");
  })
  .catch((e) => {
    console.log(e);
  });
