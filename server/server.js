const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postApi = require("./routes/post");
const userApi = require("./routes/user");
const profileApi = require("./routes/profile");
const bodyParser = require("body-parser"); // Note: corrected from `bodyparser` to `bodyParser`

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000']
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// API routes
app.use("/api/posts", postApi);
app.use("/api/users", userApi);
app.use("/api/profile", profileApi);

// Root route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Connect to local MongoDB
mongoose.connect(
  "mongodb://localhost:27017/social_media",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
