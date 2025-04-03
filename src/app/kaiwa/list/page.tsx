"use client"

import Link from "next/link"
import { Home, User, ArrowLeft } from "lucide-react"
import { useState } from "react"

interface Partner {
  id: number
  name: string
  age: number
  origin: string
  hobby: string
  restDay: string
}

export default function PartnerListPage() {
  const [partners, setPartners] = useState<Partner[]>([
    {
      id: 1,
      name: "あいさん",
      age: 37,
      origin: "東京都",
      hobby: "読書、映画鑑賞",
      restDay: "土曜日、日曜日"
    },
    {
      id: 2,
      name: "たなかさん",
      age: 42,
      origin: "神奈川県",
      hobby: "料理、ガーデニング",
      restDay: "水曜日、日曜日"
    },
    {
      id: 3,
      name: "すずきさん",
      age: 28,
      origin: "千葉県",
      hobby: "ヨガ、旅行",
      restDay: "月曜日、火曜日"
    },
    {
      id: 4,
      name: "さとうさん",
      age: 45,
      origin: "埼玉県",
      hobby: "音楽鑑賞、散歩",
      restDay: "木曜日、金曜日"
    },
    {
      id: 5,
      name: "やまださん",
      age: 33,
      origin: "大阪府",
      hobby: "テニス、写真撮影",
      restDay: "火曜日、水曜日"
    },
    {
      id: 6,
      name: "わたなべさん",
      age: 39,
      origin: "京都府",
      hobby: "茶道、華道",
      restDay: "日曜日、月曜日"
    }
  ])

  // 削除確認用の状態
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null)

  // 削除確認モーダルを表示
  const showDeleteConfirm = (id: number) => {
    setDeleteTargetId(id)
  }

  // 削除の実行
  const handleDelete = () => {
    if (deleteTargetId) {
      setPartners(partners.filter(partner => partner.id !== deleteTargetId))
      setDeleteTargetId(null)
    }
  }

  return (
    <div className="min-h-screen bg-[#2C2C2C] text-white flex flex-col">
      {/* ヘッダー */}
      <header className="pt-8 px-6">
        <div className="flex items-center mb-8 max-w-[430px] mx-auto">
          <Link href="/kaiwa/select" className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold text-center flex-1 pr-6">
            お相手リスト
          </h1>
        </div>
      </header>

      <main className="px-6 pb-40 flex-1">
        {/* パートナーリスト */}
        <div className="space-y-4 max-w-[430px] mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl p-4 text-black"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-bold">
                  {partner.name} ({partner.age})
                </h2>
                <button
                  onClick={() => showDeleteConfirm(partner.id)}
                  className="px-4 py-1.5 bg-[#F4A261] rounded-full text-white text-xs hover:bg-opacity-90 transition-colors whitespace-nowrap"
                >
                  リストから解除
                </button>
              </div>
              <div className="space-y-1 text-sm">
                <p>出身：{partner.origin}</p>
                <p>趣味：{partner.hobby}</p>
                <p>休日の過ごし方：{partner.restDay}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 削除確認オーバーレイ */}
      {deleteTargetId && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl p-6 w-full max-w-[280px] text-center">
            <p className="text-black text-lg mb-6">本当に解除しますか？</p>
            <div className="space-y-3">
              <button
                onClick={handleDelete}
                className="w-full py-3 bg-gray-100 border border-gray-300 rounded-full text-gray-800 text-base hover:bg-gray-200 transition-colors"
              >
                解除する
              </button>
              <button
                onClick={() => setDeleteTargetId(null)}
                className="w-full py-3 bg-[#F4A261] rounded-full text-white text-base hover:bg-opacity-90 transition-colors"
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}

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