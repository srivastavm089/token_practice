import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.get("/", (req, res) => {
  res
    .status(200)
    .cookie("token", "de3ifbhcvewij", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
       domain:".token-7w1e.onrender"
    })
    .json({ message: "write success" });
});

app.get("/token", (req, res) => {
  const token = req.cookies.token;

  res.status(200).json({ token });
});

app.listen(4000, () => {
  console.log("server started");
});
