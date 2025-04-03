"use client"

import React, { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, Send } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "partner"
  timestamp: string
}

export default function ChatRoom() {
  const router = useRouter()
  const params = useParams()
  const partnerId = params.id

  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "はじめまして！お話できて嬉しいです。",
      sender: "partner",
      timestamp: "14:00"
    },
    {
      id: 2,
      text: "私も嬉しいです。よろしくお願いします。",
      sender: "user",
      timestamp: "14:01"
    }
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" })
      }
      setMessages([...messages, newMessage])
      setMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-10">
        <div className="max-w-[430px] mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={`/images/partners/partner${partnerId}.jpg`}
                  alt="パートナー"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="font-semibold">ゆうりさん</h1>
                <p className="text-xs text-gray-500">オンライン</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* メッセージエリア */}
      <main className="max-w-[430px] mx-auto pt-16 pb-20 px-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className="max-w-[70%]">
                <div
                  className={`p-3 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-white text-gray-900 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
                <div
                  className={`text-xs text-gray-500 mt-1 ${
                    msg.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 入力エリア */}
      <footer className="fixed bottom-0 w-full bg-white border-t">
        <div className="max-w-[430px] mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="メッセージを入力..."
              className="flex-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
} 