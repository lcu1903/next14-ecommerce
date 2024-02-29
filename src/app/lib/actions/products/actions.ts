import connectToDB from "@/app/lib/utils.js";
import { ProductType } from "../../definition";
import { redirect } from "next/navigation";
import mongoose from "mongoose";
import { Product } from "@/app/lib/models";

export type State = {
  errors?: {
    name?: string[];
    price?: string[];
    amount?: string[];
    stock?: string[];
    tag?: string[];
    description?: string[];
    brand?: string[];
  };
  message?: string | null;
};

//add product from formdata
export async function createProduct(formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name"),
      price: formData.get("price"),
      cat: formData.get("type"),
      brand: formData.get("brand"),
      stock: formData.get("amount"),
      tag: formData.get("tag"),
      description: formData.get("description"),
    };
    const res = await fetch("http://localhost:3000/api/products/add", {
      method: "POST",
      body: JSON.stringify(rawData),
      headers: { "Content-Type": "application/json" },
    });
    console.log(res, "res");

    const product = new Product(rawData);

    if (res.ok) {
      const data = await res.json();

      console.log("save", product.save);
      await product.save();

      return data;
    } else {
      return Error("Failed to add product");
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add product to database.");
  }
}
//get all products
export async function getAllProduct() {
  try {
    connectToDB();
    const data: ProductType[] = await Product.find({});

    const res = await fetch("http://localhost:3000/api/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      return data;
    }
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product table.");
  }
}
//get product by id
export async function getProductById(id: string) {
  const data = await Product.findById(id);
  const res = await fetch(`/api/products/${id}`, {
    method: "UPDATE",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    return Error("Failed to fetch product");
  }
}
export async function updateProduct(id: string, formData: FormData) {
  connectToDB();
  const rawData = {
    name: formData.get("name"),
    price: formData.get("price"),
    cat: formData.get("cat"),
    brand: formData.get("brand"),
    stock: formData.get("stock"),
    tag: formData.get("tag"),
    description: formData.get("description"),
  };

  const res = await fetch(`/api/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(rawData),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    return Error("Failed to update product");
  }
}
export async function deleteProduct(id: string) {
  const res = await fetch(`/api/products/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    return Error("Failed to delete product");
  }
}
export async function searchProduct(query: string) {
  const res = await fetch(`/api/products/search?q=${query}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    return Error("Failed to search product");
  }
}
