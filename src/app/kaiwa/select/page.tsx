"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, User, X, ChevronUp } from "lucide-react"

interface Partner {
  id: number
  name: string
}

export default function KaiwaSelectPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedPartner, setSelectedPartner] = useState<string>("名前を選択してください")
  
  // 仮のデータ（後でDBから取得）
  const partners: Partner[] = [
    { id: 1, name: "田中さん" },
    { id: 2, name: "佐藤さん" },
    { id: 3, name: "鈴木さん" }
  ]

  return (
    <div className="min-h-screen bg-[#2C2C2C] text-white">
      {/* ヘッダー */}
      <header className="pt-8 px-6">
        <h1 className="text-2xl font-bold text-center mb-16">
          誰との会話を練習する？
        </h1>
      </header>

      <main className="px-6">
        {/* 操作ボタン */}
        <div className="flex justify-center gap-4 mb-8">
          <Link
            href="/kaiwa/register"
            className="px-6 py-3 bg-[#F4A261] rounded-full text-white hover:bg-opacity-90 transition-colors"
          >
            新しく登録
          </Link>
          <Link
            href="/kaiwa/list"
            className="px-6 py-3 bg-[#F4A261] rounded-full text-white hover:bg-opacity-90 transition-colors"
          >
            名簿を見る
          </Link>
        </div>

        {/* ドロップダウン */}
        <div className="relative mb-32 max-w-[320px] mx-auto">
          <div 
            className="bg-white rounded-xl p-4 flex justify-between items-center cursor-pointer w-full whitespace-nowrap"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="text-black">{selectedPartner}</span>
            <div className="flex items-center gap-2">
              <ChevronUp 
                className={`w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? "" : "transform rotate-180"}`}
              />
              <X 
                className="w-5 h-5 text-gray-500 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedPartner("名前を選択してください")
                }}
              />
            </div>
          </div>

          {/* ドロップダウンリスト */}
          {isDropdownOpen && (
            <div className="absolute w-full mt-2 bg-white rounded-xl overflow-hidden shadow-lg">
              {partners.map((partner, index) => (
                <div
                  key={partner.id}
                  className={`p-4 cursor-pointer hover:bg-gray-50 text-black ${
                    index % 2 === 1 ? "bg-gray-50" : ""
                  }`}
                  onClick={() => {
                    setSelectedPartner(partner.name)
                    setIsDropdownOpen(false)
                  }}
                >
                  {partner.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 次へ進むボタン */}
        <div className="flex justify-center">
          <Link
            href={selectedPartner !== "名前を選択してください" ? `/kaiwa/setting?partner=${encodeURIComponent(selectedPartner)}` : "#"}
            className={`px-12 py-3 rounded-full text-center w-64 transition-colors whitespace-nowrap ${
              selectedPartner !== "名前を選択してください"
                ? "bg-[#F4A261] hover:bg-opacity-90"
                : "bg-gray-500 cursor-not-allowed"
            }`}
          >
            会話を始めよう！
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