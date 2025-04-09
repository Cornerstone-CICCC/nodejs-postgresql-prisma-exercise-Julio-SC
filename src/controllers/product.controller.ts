import { Request, Response } from "express";
import * as ProductModel from "../models/product.model";

export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await ProductModel.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving products" });
  }
};

export const getOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const product = await ProductModel.getProductById(id);
    if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
        
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving product" });
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productName, price } = req.body;
    const product = await ProductModel.createProduct({ productName, price: parseFloat(price) });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: "Error creating product" });
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const { productName, price } = req.body;
    const updated = await ProductModel.updateProduct(id, { productName, price: parseFloat(price) });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating product" });
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    await ProductModel.deleteProduct(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: "Error deleting product" });
  }
};
