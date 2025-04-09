// Set up your server
import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/products.routes";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/products", productRoutes);

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});