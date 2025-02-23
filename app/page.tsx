import { EmojiForm } from '@/components/emoji-form';
import { EmojiGrid } from '@/components/emoji-grid';
import FormWrapper from '@/components/FormWrapper';

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-50" dir="rtl">
      <main className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-2 text-gray-800">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              صانع الرموز التعبيرية
            </span>
            <span className="text-5xl">😊</span> 
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            أنشئ رموزًا تعبيرية فريدة وجميلة باستخدام الذكاء الاصطناعي. فقط صف ما تريد!
          </p>
          <FormWrapper />
        </div>
      </main>
    </div>
  );
}
