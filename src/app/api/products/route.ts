import { NextResponse, NextRequest } from "next/server";

export async function GET(res: NextResponse) {
  const data = await res.json().toString();
  console.log(data);
  return NextResponse.json({ data });
}

export async function POST(req: NextRequest) {
  
  const data = await req.json();
  console.log(data);
  return NextResponse.json({ data });
}

export async function PATCH(req: NextRequest) {
  const data = await req.json();
  console.log(data);
  return NextResponse.json({ data });
}

export async function DELETE(req: NextRequest) {
  const data =  req.body;
  console.log(data);

  return NextResponse.json({ data });
}
