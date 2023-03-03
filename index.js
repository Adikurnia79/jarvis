import express from "express";

const app = express();

// middleware

app.use((req, res, next) => {
  console.log("permintaan masuk");
  next();
});

// route

app.get("/", (req, res) => {
  res.send("adi");
});

app.listen(3000, () => {
  console.log("Berhasil jalan");
});
