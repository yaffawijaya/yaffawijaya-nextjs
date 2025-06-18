import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { question, model } = await req.json();

    if (!question || typeof question !== 'string') {
      return NextResponse.json({ reply: 'Invalid input.' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'public', 'profiles', 'yaffa', 'documents', 'about-me.txt');
    const aboutMe = await fs.readFile(filePath, 'utf-8');
    const prompt = `${aboutMe}\n\nQ: ${question}\nA:`;

    // Gemini Flash (default)
    if (model === 'gemini') {
      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.4,
              maxOutputTokens: 512
            },
            safetySettings: [
              { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 4 },
              { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 4 },
              { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 4 },
              { category: 'HARM_CATEGORY_HARASSMENT', threshold: 4 }
            ]
          })
        }
      );

      const result = await geminiRes.json();
      const reply = result?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      return NextResponse.json({ reply: reply ?? '[No response from LLM.]' });
    }

    // GPT-4o Mini (OpenAI)
    if (model === 'gpt4o') {
      const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            {
              role: 'system',
              content: `You are Yaffa. Use the following profile as your knowledge base:\n${aboutMe}`,
            },
            {
              role: 'user',
              content: question,
            }
          ],
          temperature: 0.4,
          max_tokens: 512,
        }),
      });

      const result = await openaiRes.json();
      const reply = result?.choices?.[0]?.message?.content?.trim();
      return NextResponse.json({ reply: reply ?? '[No response from LLM.]' });
    }

    // Fallback if no known model
    return NextResponse.json({ reply: 'Unknown model selected.' }, { status: 400 });

  } catch (error) {
    console.error('[Chat API Error]', error);
    return NextResponse.json({ reply: 'Server error occurred.' }, { status: 500 });
  }
}
