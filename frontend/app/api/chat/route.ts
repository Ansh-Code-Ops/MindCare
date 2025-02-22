import { NextResponse } from "next/server";
import { SessionsClient } from "@google-cloud/dialogflow";
import dotenv from "dotenv";

dotenv.config();

const sessionClient = new SessionsClient();

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message) return NextResponse.json({ error: "Message is required" }, { status: 400 });

    const sessionPath = sessionClient.projectAgentSessionPath(
      process.env.DIALOGFLOW_PROJECT_ID as string,
      "unique-session-id"
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: { text: message, languageCode: "en" },
      },
    };

    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult?.fulfillmentText || "I'm not sure how to respond.";

    return NextResponse.json({ reply: result });
  } catch (error) {
    console.error("Error communicating with Dialogflow:", error);
    return NextResponse.json({ error: "Failed to get response from AI" }, { status: 500 });
  }
}
