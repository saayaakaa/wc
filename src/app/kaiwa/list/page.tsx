"use client"

import Link from "next/link"
import { Home, User, ArrowLeft } from "lucide-react"
import UnlinkButton from "./components/UnlinkButton"

const partners = [
  {
    id: 1,
    name: "田中さん",
    age: 35,
    origin: "愛知県",
    hobby: "カメラ、写真撮影",
    restDay: "写真を撮りに出かけたり、カフェに行くことが多い\n映画鑑賞も好き"
  },
  {
    id: 2,
    name: "鈴木さん",
    age: 42,
    origin: "東京都",
    hobby: "料理、ガーデニング",
    restDay: "自宅で料理を作ったり、庭の手入れをしています"
  },
  {
    id: 3,
    name: "佐藤さん",
    age: 38,
    origin: "大阪府",
    hobby: "ヨガ、読書",
    restDay: "朝はヨガで体を動かし、午後は好きな本を読んでリラックスします\nたまに友達とカフェ巡りもします"
  },
  {
    id: 4,
    name: "山田さん",
    age: 45,
    origin: "福岡県",
    hobby: "ゴルフ、ワイン",
    restDay: "休日は早朝からゴルフに行くことが多いです\n夜は自宅でワインを楽しみながらゆっくり過ごします"
  }
]

export default function ListPage() {
  const handleUnlink = (partnerName: string) => {
    // ここで解除処理を実装
    console.log(`${partnerName}との会話を解除`)
  }

  return (
    <div className="min-h-screen bg-[#2C2C2C] text-white flex flex-col">
      {/* ヘッダー */}
      <header className="pt-8 px-6">
        <div className="flex items-center mb-8 max-w-[430px] mx-auto">
          <Link href="/kaiwa/select" className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-lg font-bold text-center flex-1 pr-6">
            お相手一覧
          </h1>
        </div>
      </header>

      <main className="px-6 pb-40 flex-1">
        <div className="max-w-[430px] mx-auto space-y-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl p-4 text-black"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="font-bold text-lg">{partner.name}</h2>
                  <p className="text-sm text-gray-600">{partner.age}歳</p>
                </div>
                <UnlinkButton
                  partnerName={partner.name}
                  onUnlink={handleUnlink}
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">出身地：</span>
                  {partner.origin}
                </p>
                <p className="text-sm">
                  <span className="font-medium">趣味：</span>
                  {partner.hobby}
                </p>
                <p className="text-sm">
                  <span className="font-medium">休日の過ごし方：</span>
                  {partner.restDay}
                </p>
              </div>
            </div>
          ))}
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