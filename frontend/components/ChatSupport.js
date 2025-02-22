"use client";

import { useState } from "react";
import { SessionsClient } from "@google-cloud/dialogflow";

export default function ChatSupport() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const sessionClient = new SessionsClient({
      keyFilename: process.env.DIALOGFLOW_KEY_PATH,
    });
    const sessionPath = sessionClient.projectAgentSessionPath(
      process.env.DIALOGFLOW_PROJECT_ID,
      "unique-session-id"
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: input,
          languageCode: "en-US",
        },
      },
    };

    try {
      const responses = await sessionClient.detectIntent(request);
      const result = responses[0].queryResult;
      setMessages([
        ...messages,
        { text: input, user: true },
        { text: result.fulfillmentText, user: false },
      ]);
      setInput("");
    } catch (error) {
      console.error("Error sending message to Dialogflow:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">AI Chat Support</h1>
      <div className="mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 mb-2 rounded-lg ${msg.user ? "bg-blue-100" : "bg-gray-100"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}