const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// Routes
app.use("/api/auth", require("./routes/auth"));
// app.use("/api/maintenance", require("./routes/maintenance"));
// app.use("/api/reports", require("./routes/reports"));
// app.use("/api/transactions", require("./routes/transactions"));
// app.use("/api/memberships", require("./routes/memberships"));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
