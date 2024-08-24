import dbConnection from "@/lib/dbConnection";
import ProductModel from "@/models/ProductModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnection();

    const url = req.nextUrl;
    const category = url.searchParams.get("category");
    const products = await ProductModel.find({
      category: category,
    });

    return NextResponse.json(products, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
    });
  }
}
