"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, User } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

interface Message {
  text: string
  isUser: boolean
}

export default function PracticePage() {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [rallyCount, setRallyCount] = useState(0)
  const [showFinish, setShowFinish] = useState(false)

  // 初期メッセージを表示
  useEffect(() => {
    const initialMessage = {
      text: "こんにちは、今日はお時間をいただきありがとうございます。Yusukeさんとお話しできるのを楽しみにしていました。",
      isUser: false
    }
    setMessages([initialMessage])
  }, [])

  // メッセージ送信処理
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    // ユーザーのメッセージを追加
    const userMessage: Message = {
      text: inputMessage,
      isUser: true
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputMessage("")
    setRallyCount(prev => prev + 1)

    // 相手からの返信を追加（ここでは簡単な応答を実装）
    setTimeout(() => {
      const partnerMessage: Message = {
        text: getPartnerResponse(rallyCount),
        isUser: false
      }
      setMessages(prev => [...prev, partnerMessage])
      
      // ラリーカウントを更新し、5ラリーで完了
      const newRallyCount = rallyCount + 1
      if (newRallyCount >= 4) {
        setShowFinish(true)
      }
    }, 1000)
  }

  // 相手の返信メッセージを取得（仮実装）
  const getPartnerResponse = (count: number) => {
    const responses = [
      "バスと電車で来ました。バスが結構混んでいて、間に合うか不安になったんですが、間に合ってよかったです。",
      "はい、普段からよく利用しています。通勤にも使っていて、慣れているので安心です。",
      "そうですね。電車の方が時間が読みやすいですし、本も読めるので好きです。",
      "休日は主に読書をしたり、カフェでゆっくり過ごすことが多いです。",
      "今日は楽しい時間をありがとうございました。"
    ]
    return responses[count] || "申し訳ありません、ちょっと考え中です..."
  }

  return (
    <div className="min-h-screen bg-[#2C2C2C] text-white flex flex-col">
      <main className="flex-1 flex flex-col px-4 pb-32 pt-4">
        {/* メッセージ表示エリア */}
        <div className="flex-1 space-y-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.isUser
                    ? "bg-[#F4A261] text-white"
                    : "bg-white text-black"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Finishボタン */}
        {showFinish && (
          <div className="fixed bottom-20 left-0 right-0 px-4">
            <Link
              href="/kaiwa/feedback"
              className="block w-full py-4 bg-[#F4A261] text-white text-center font-bold rounded-lg"
            >
              F I N I S H
            </Link>
          </div>
        )}

        {/* 入力エリア */}
        {!showFinish && (
          <div className="fixed bottom-20 left-0 right-0 px-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white text-black"
                placeholder="メッセージを入力..."
              />
              <button
                onClick={handleSendMessage}
                className="px-6 py-3 bg-[#F4A261] rounded-xl text-white"
              >
                送信
              </button>
            </div>
          </div>
        )}
      </main>

      {/* フッターナビゲーション */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#2C2C2C] py-4 border-t border-gray-700">
        <div className="max-w-[430px] mx-auto px-6">
          <div className="flex justify-between">
            <Link href="/" className="flex flex-col items-center">
              <Home className="w-6 h-6 text-[#F4A261]" />
              <span className="text-sm text-[#F4A261] mt-1">Home</span>
            </Link>
            <Link href="/profile" className="flex flex-col items-center">
              <User className="w-6 h-6 text-white" />
              <span className="text-sm text-white mt-1">Profile</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 