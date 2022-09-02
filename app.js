import express from "express";
import cors from "cors";
 import router from "./routes/index.js"; 
import counterRouter from "./routes/counter.js"

const PORT = 4000;

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/pricing", router); 
app.use("/counter",counterRouter)

app.get("/", (req, res) => {
  res.send(
'Your on the site'
  );
});

app.listen(`${PORT}`);

console.log(`Listening on ${PORT}`);
