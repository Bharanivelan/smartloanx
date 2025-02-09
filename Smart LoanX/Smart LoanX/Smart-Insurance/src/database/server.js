// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error("MongoDB Connection Error:", err));

// // Loan Schema
// const loanSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   loanAmount: Number,
//   loanPurpose: String,
//   address: String,
//   employmentStatus: String,
//   income: Number,
//   creditScore: Number,
//   createdAt: { type: Date, default: Date.now }
// });

// const LoanApplication = mongoose.model("LoanApplication", loanSchema);

// // API to Submit Loan Application
// app.post("/apply-loan", async (req, res) => {
//   try {
//     const loanData = new LoanApplication(req.body);
//     await loanData.save();
//     res.status(201).json({ message: "Application submitted successfully!", data: loanData });
//   } catch (error) {
//     console.error("Error submitting loan application:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // API to Fetch All Loan Applications
// app.get("/loans", async (req, res) => {
//   try {
//     const loans = await LoanApplication.find();
//     res.status(200).json(loans);
//   } catch (error) {
//     console.error("Error fetching loans:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // API to Fetch a Single Loan Application by ID
// app.get("/loans/:id", async (req, res) => {
//   try {
//     const loan = await LoanApplication.findById(req.params.id);
//     if (!loan) return res.status(404).json({ error: "Loan not found" });
//     res.status(200).json(loan);
//   } catch (error) {
//     console.error("Error fetching loan:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // API to Update Loan Application by ID
// app.put("/loans/:id", async (req, res) => {
//   try {
//     const updatedLoan = await LoanApplication.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedLoan) return res.status(404).json({ error: "Loan not found" });
//     res.status(200).json({ message: "Loan updated successfully", data: updatedLoan });
//   } catch (error) {
//     console.error("Error updating loan:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // API to Delete Loan Application by ID
// app.delete("/loans/:id", async (req, res) => {
//   try {
//     const deletedLoan = await LoanApplication.findByIdAndDelete(req.params.id);
//     if (!deletedLoan) return res.status(404).json({ error: "Loan not found" });
//     res.status(200).json({ message: "Loan deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting loan:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Test API
// app.get("/", (req, res) => {
//   res.send("Loan Application API is running!");
// });

// // Start Server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection (FIXED)
mongoose
  .connect(process.env.MONGO_URI) // No need for deprecated options
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Stop server if DB fails
  });

// Loan Schema
const loanSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  loanAmount: Number,
  loanPurpose: String,
  address: String,
  employmentStatus: String,
  income: Number,
  creditScore: Number,
  createdAt: { type: Date, default: Date.now }
});

const LoanApplication = mongoose.model("LoanApplication", loanSchema);

// API Routes
app.post("/apply-loan", async (req, res) => {
  try {
    const loanData = new LoanApplication(req.body);
    await loanData.save();
    res.status(201).json({ message: "Application submitted successfully!", data: loanData });
  } catch (error) {
    console.error("❌ Error submitting loan application:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/loans", async (req, res) => {
  try {
    const loans = await LoanApplication.find();
    res.status(200).json(loans);
  } catch (error) {
    console.error("❌ Error fetching loans:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/loans/:id", async (req, res) => {
  try {
    const loan = await LoanApplication.findById(req.params.id);
    if (!loan) return res.status(404).json({ error: "Loan not found" });
    res.status(200).json(loan);
  } catch (error) {
    console.error("❌ Error fetching loan:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/loans/:id", async (req, res) => {
  try {
    const updatedLoan = await LoanApplication.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLoan) return res.status(404).json({ error: "Loan not found" });
    res.status(200).json({ message: "Loan updated successfully", data: updatedLoan });
  } catch (error) {
    console.error("❌ Error updating loan:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/loans/:id", async (req, res) => {
  try {
    const deletedLoan = await LoanApplication.findByIdAndDelete(req.params.id);
    if (!deletedLoan) return res.status(404).json({ error: "Loan not found" });
    res.status(200).json({ message: "Loan deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting loan:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Test API
app.get("/", (req, res) => {
  res.send("✅ Loan Application API is running!");
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
