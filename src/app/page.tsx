"use client"

import Link from "next/link"
import Image from "next/image"
import { Home, User } from "lucide-react"
import { useState, useEffect } from "react"

export default function MainPage() {
  // ユーザー情報の状態管理
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: ""
  })

  // コンポーネントマウント時にユーザー情報を取得
  useEffect(() => {
    // TODO: 後でAPIやローカルストレージから取得するように変更
    const fetchUserData = () => {
      // 仮のユーザーデータ
      setUser({
        firstName: "Yusuke",
        lastName: "Sato",
        username: "Yusuke"
      })
    }

    fetchUserData()
  }, [])

  return (
    <div className="min-h-screen bg-[#2C2C2C]">
      <main className="max-w-[430px] mx-auto px-6 py-8">
        {/* プロフィールセクション */}
        <div className="flex items-center gap-4 mb-12">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/images/profile/yusuke.jpg"
              alt={user.username}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl text-white flex items-center gap-2">
              Hi, {user.username}! <span className="text-2xl">👋</span>
            </h1>
            <p className="text-gray-400">{user.lastName} {user.firstName}</p>
          </div>
        </div>

        {/* メインテキスト */}
        <h2 className="text-white text-xl mb-8">
          今日は何をしますか？
        </h2>

        {/* メニューボタン */}
        <nav className="space-y-4">
          <Link 
            href="/kaiwa/select" 
            className="block w-full p-6 text-center bg-white rounded-2xl hover:bg-gray-100 transition-colors"
          >
            会話の練習をしよう
          </Link>
          <Link 
            href="/checklist" 
            className="block w-full p-6 text-center bg-white rounded-2xl hover:bg-gray-100 transition-colors"
          >
            チェックリストを見る
          </Link>
          <Link 
            href="/community" 
            className="block w-full p-6 text-center bg-white rounded-2xl hover:bg-gray-100 transition-colors"
          >
            コミュニティへ行こう
          </Link>
        </nav>

        {/* ナビゲーションバー */}
        <nav className="fixed bottom-0 left-0 right-0 bg-[#2C2C2C] py-4">
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
        </nav>
      </main>
    </div>
  )
}