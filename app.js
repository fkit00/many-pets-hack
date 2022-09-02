import express from "express";
import cors from "cors";
 import router from "./routes/index.js"; 

const PORT = 4000;

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/pricing", router); 



app.get("/", (req, res) => {
  res.send(
'Your on the site'
  );
});

app.use(function(req, res, next){
  res.status(404).render('404_error_template', {title: "Sorry, page not found"});
});

app.listen(`${PORT}`);

console.log(`Listening on ${PORT}`);
