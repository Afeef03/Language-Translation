import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai';

type ResponseData = {
  url: string | undefined;
}
interface GenerateRequest extends NextApiRequest {
  body: {
    prompt: string;
    n: 1;
  }
}


const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY
});



export default async function handler(
  req: GenerateRequest,
  res: NextApiResponse<ResponseData>
) {
  const promptString = req.body.prompt;
  if (!promptString || undefined) {
    return new Response('you need a prompt', { status: 400 })
  }
  const response = await openai.images.generate({
    model: "dall-e-2",
    prompt: `${promptString}`,
    n: 1,
    size: "512x512",
  });
  const imageUrl = response.data[0].url;
  res.status(200).json({ url: imageUrl })
}