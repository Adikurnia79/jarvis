import express from "express";

const app = express();

// middleware

app.use((req, res, next) => {
  console.log("permintaan masuk");
  next();
});

// route

app.get("/api/", (req, res) => {
  res.send("Adi Kurniawan");
});

app.listen(3000, () => {
  console.log("Berhasil jalan");
});
