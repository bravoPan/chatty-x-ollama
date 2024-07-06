import { NextRequest, NextResponse } from "next/server";

// import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { userPrompt } = reqBody;
  console.log(userPrompt)
  const url = 'http://localhost:11434/api/generate';
  const data = {
    'model': "phi3",
    "prompt": userPrompt,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const text = await response.text();
    return NextResponse.json({
      text,
    });

  } catch (error) {
    return NextResponse.json({
      text: "Unable to process the prompt. Please try again.",
    });
  }
}
