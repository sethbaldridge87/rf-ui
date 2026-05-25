import { NextResponse } from 'next/server';

export async function GET() {
  const dataObj = {
    name: "RainFocus Summit",
    city: "Lehi",
    state: "UT",
    month: "December",
    day: "15"
  };

  return NextResponse.json(dataObj);
}