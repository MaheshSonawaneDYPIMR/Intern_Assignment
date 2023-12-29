import express from "express";
import connectDB from "./Config/db.js"; 
import router from "./routes/insightRoutes.js";

const app = express();




app.use(express.json());

connectDB();

app.use("/insights", router);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
