import express from "express";
import cors from "cors";

import movie from "./routes/movie";
import user from "./routes/user";

const app = express();

app.use(cors());

app.use("/movie", movie);
app.use("/user", user);

app.listen("3000", () => {
  console.log("Server is running on PORT 3000");
});
