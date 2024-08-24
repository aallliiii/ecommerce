import dbConnection from "@/lib/dbConnection";
import ProductModel from "@/models/ProductModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnection();
    const url = req.nextUrl;
    const id = url.searchParams.get("id");

    const Product = await ProductModel.findOne({
      id: id,
    });

    return NextResponse.json(Product, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
    });
  }
}
