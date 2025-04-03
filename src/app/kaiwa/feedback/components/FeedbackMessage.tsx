"use client"

export function FeedbackMessage() {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="w-16 h-16 bg-[#F4A261] rounded-full flex items-center justify-center">
        {/* TODO: アバター画像を追加 */}
      </div>
      <div className="flex-1">
        <p className="text-lg font-bold mb-2">
          とても良い会話ができていましたね！
        </p>
        <p className="text-sm text-gray-600">
          次はもう少し<br />
          踏み込んだ質問にチャレンジしてみよう！
        </p>
      </div>
    </div>
  )
} 