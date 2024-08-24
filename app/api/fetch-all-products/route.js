import dbConnection from "@/lib/dbConnection";
import ProductModel from "@/models/ProductModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnection();

    const products = await ProductModel.find();

    return NextResponse.json(products, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
    });
  }
}
