import { NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Mock emoji URLs for testing - using absolute paths
const MOCK_EMOJIS = [
  'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Grinning%20face/3D/grinning_face_3d.png',
  'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Smiling%20face%20with%20hearts/3D/smiling_face_with_hearts_3d.png',
  'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Beaming%20face%20with%20smiling%20eyes/3D/beaming_face_with_smiling_eyes_3d.png',
  'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Grinning%20face%20with%20sweat/3D/grinning_face_with_sweat_3d.png',
  'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Star-struck/3D/star-struck_3d.png'
];

export async function POST(req: Request) {
  try {
    const { prompt, useRealApi } = await req.json();
    
    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    if (useRealApi) {
      if (!process.env.REPLICATE_API_TOKEN) {
        throw new Error('REPLICATE_API_TOKEN is not configured');
      }

      const output = await replicate.run(
        "fofr/sdxl-emoji:dee76b5afde21b0f01ed7925f0665b7e879c50ee718c5f78a9d38e04d523cc5e",
        {
          input: {
            prompt,
            apply_watermark: false,
            num_outputs: 1
          }
        }
      );

      return NextResponse.json({ images: output });
    } else {
      // Mock API response
      await new Promise(resolve => setTimeout(resolve, 1500));
      const numEmojis = Math.floor(Math.random() * 2) + 1;
      const selectedEmojis = Array.from({ length: numEmojis }, () => 
        MOCK_EMOJIS[Math.floor(Math.random() * MOCK_EMOJIS.length)]
      );
      return NextResponse.json({ images: selectedEmojis });
    }

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate emoji' },
      { status: 500 }
    );
  }
} 