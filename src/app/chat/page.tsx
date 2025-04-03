"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

interface PartnerCard {
  id: number
  name: string
  image: string
  description: string
}

const partners: PartnerCard[] = [
  {
    id: 1,
    name: "ゆうりさん",
    image: "/images/partners/yuuri.jpg",
    description: "28歳・看護師・東京在住"
  },
  {
    id: 2,
    name: "まりこさん",
    image: "/images/partners/mariko.jpg",
    description: "32歳・会社員・神奈川在住"
  },
  {
    id: 3,
    name: "さくらさん",
    image: "/images/partners/sakura.jpg",
    description: "25歳・美容師・千葉在住"
  }
]

export default function ChatPartnerList() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-10">
        <div className="max-w-[430px] mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-center">会話練習パートナー</h1>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-[430px] mx-auto pt-16 pb-20 px-4">
        <div className="space-y-4 mt-4">
          {partners.map((partner) => (
            <Link href={`/chat/${partner.id}`} key={partner.id}>
              <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{partner.name}</h2>
                    <p className="text-gray-600 text-sm">{partner.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* フッター */}
      <footer className="fixed bottom-0 w-full bg-white border-t">
        <div className="max-w-[430px] mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-center flex-1">
              <span className="text-blue-600 font-medium">パートナー一覧</span>
            </div>
            <div className="text-center flex-1">
              <Link href="/profile" className="text-gray-500">
                プロフィール
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 