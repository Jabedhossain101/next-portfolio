import { OpenAI } from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Apnar OpenAI API Key eikhane thakbe
});

export async function POST(req) {
  const { messages } = await req.json();
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'system',
        content:
          'You are an AI assistant for Jabed Hossain, a MERN stack developer. Help visitors with questions about his projects, skills, and experience.',
      },
      ...messages,
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
