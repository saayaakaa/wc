"use client"

import Link from "next/link"
import { Home, User } from "lucide-react"

export default function RegisterDonePage() {
  return (
    <div className="min-h-screen bg-[#2C2C2C] text-white flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="max-w-[430px] w-full text-center">
          <h1 className="text-2xl font-bold mb-4">
            登録が完了しました！
          </h1>
          <p className="text-gray-300 mb-8">
            お相手の情報が登録されました。<br />
            会話の練習を始めましょう。
          </p>
          <Link
            href="/kaiwa/select"
            className="block w-full py-4 bg-[#F4A261] rounded-full text-white text-base hover:bg-opacity-90 transition-colors"
          >
            会話の練習を始める
          </Link>
        </div>
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