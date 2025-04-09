import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllProducts = () => prisma.product.findMany();
export const getProductById = (id: number) => prisma.product.findUnique({ where: { id } });
export const createProduct = (data: { productName: string; price: number }) => prisma.product.create({ data });
export const updateProduct = (id: number, data: { productName?: string; price?: number }) =>
  prisma.product.update({ where: { id }, data });
export const deleteProduct = (id: number) => prisma.product.delete({ where: { id } });