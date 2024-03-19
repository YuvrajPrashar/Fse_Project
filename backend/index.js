import { app } from "./app.js";
import { connectDB } from "./server/server.js";
import "dotenv/config.js";

connectDB()
  .then(
    app.listen(process.env.PORT || 5001, () => {
      console.log(`app is running on ${process.env.PORT}`);
    })
  )
  .catch((error) => {
    console.log(`something went wrong error: ${error}`);
  });
