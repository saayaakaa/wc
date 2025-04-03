"use client"

import Link from "next/link"

export default function KaiwaTopPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[430px] mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-8">
          会話練習メニュー
        </h1>
        <nav className="space-y-4">
          <Link 
            href="/kaiwa/list" 
            className="block w-full p-4 text-center bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            会話練習を始める
          </Link>
          <Link 
            href="/kaiwa/register" 
            className="block w-full p-4 text-center bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            新しい相手を登録
          </Link>
          <Link 
            href="/kaiwa/setting" 
            className="block w-full p-4 text-center bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            設定
          </Link>
        </nav>
      </main>
    </div>
  )
} 