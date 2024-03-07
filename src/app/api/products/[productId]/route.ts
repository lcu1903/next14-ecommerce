import { NextResponse, NextRequest } from "next/server";
export async function DELETE(req: NextRequest) {
    const data = await req.json();
    console.log(data);
    
    return NextResponse.json({ data, message: "Product deleted"});
  }
  