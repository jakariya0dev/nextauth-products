import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "data", "products.json");

export async function GET(req, { params }) {
  const data = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(data);
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
