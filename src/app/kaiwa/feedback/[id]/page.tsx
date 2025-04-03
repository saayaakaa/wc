"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Star } from "lucide-react"

export default function FeedbackPage() {
  const router = useRouter()
  const params = useParams()
  const partnerId = params.id

  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここでフィードバックを処理
    router.push("/kaiwa/list")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-[430px] mx-auto px-4 py-4">
          <div className="flex items-center">
            <button
              onClick={() => router.back()}
              className="text-gray-600"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold ml-4">会話のフィードバック</h1>
          </div>
        </div>
      </header>

      <main className="max-w-[430px] mx-auto px-4 py-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              会話の満足度
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  className="p-2"
                >
                  <Star
                    className={`w-8 h-8 ${
                      value <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              フィードバックコメント
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="会話の感想や改善点などをお書きください"
            />
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              送信する
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="w-full p-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              キャンセル
            </button>
          </div>
        </form>
      </main>
    </div>
  )
} 