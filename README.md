# AI Emoji Generator

An AI-powered emoji generator that creates custom emojis based on text prompts. Built with Next.js and Replicate's SDXL model.

## Overview

This application allows users to generate custom emojis by providing text descriptions. It features a toggle between a mock API (for development) and the real Replicate AI API for production use.

## Features

- 🎨 Generate custom emojis from text descriptions
- 🔄 Toggle between mock and real AI generation
- ⬇️ Download generated emojis
- ❤️ Like/save favorite emojis
- 🌐 RTL support for Arabic text
- 📱 Responsive design

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Replicate API](https://replicate.com/)
- [Zustand](https://github.com/pmndrs/zustand) for state management
- [Radix UI](https://www.radix-ui.com/) for UI components

## Getting Started

### Prerequisites

- Node.js 16 or later
- npm or yarn
- Replicate API key (for real AI generation)

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd emoji-generator
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Create a .env.local file and add your Replicate API key
REPLICATE_API_TOKEN=your_api_key_here
```

4. Start the development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to use the application.

## Usage

1. Choose API Mode:
   - Mock API: Free, instant results using predefined emojis
   - Real API: Uses Replicate's AI model for custom generation

2. Enter a prompt describing your desired emoji

3. Click "Generate" to create your emoji

4. Use the buttons to:
   - Download the generated emoji
   - Like/save your favorites

## Development

### Mock Mode
The application includes a mock mode that returns predefined emoji images instead of making real API calls. This is useful for:
- Development and testing
- UI/UX improvements
- Avoiding API costs during development

### API Integration
The app uses Replicate's SDXL emoji model for generation:
```typescript
// Model ID
"fofr/sdxl-emoji:dee76b5afde21b0f01ed7925f0665b7e879c50ee718c5f78a9d38e04d523cc5e"
```

## Environment Variables

Required environment variables:
```bash
REPLICATE_API_TOKEN=xxx  # Your Replicate API key
```

## License

This project is licensed under the MIT License.
