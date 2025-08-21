import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

const filePath = path.join(process.cwd(), "src", "data", "products.json");

export async function GET() {
  const data = await fs.readFileSync(filePath, "utf-8");
  return NextResponse.json(JSON.parse(data));
}

export async function POST(req) {
  try {
    const body = await req.json();
    const data = fs.readFileSync(filePath, "utf-8");
    const products = JSON.parse(data);

    const newProduct = {
      id: products.length + 1,
      ...body,
    };

    products.push(newProduct);
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));

    return NextResponse.json({ success: true, product: newProduct });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 }
    );
  }
}
