"use client"

import Link from "next/link"
import { Home, User } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function SettingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedPartner = searchParams.get('partner') || "あいさん"

  const [settings, setSettings] = useState({
    partner: selectedPartner,  // URLパラメータから取得した相手
    isFirstTime: true,   // 初回かどうか
    scenario: "自己紹介"  // 選択されたシナリオ
  })

  const partners = [
    "あいさん",
    "たなかさん",
    "すずきさん",
    "さとうさん",
  ]

  const handleStartPractice = () => {
    // 設定を保存して練習画面へ遷移
    console.log(settings)
    router.push("/kaiwa/practice")
  }

  return (
    <div className="min-h-screen bg-[#2C2C2C] text-white flex flex-col">
      <main className="flex-1 flex flex-col px-6 pt-8">
        <h1 className="text-lg font-bold text-center mb-12">
          どのように会話練習をしますか？
        </h1>

        <div className="max-w-[430px] mx-auto w-full flex-1">
          {/* 設定フォーム */}
          <div className="space-y-8">
            {/* 相手選択 */}
            <div className="space-y-2">
              <label className="block text-sm">誰と話しますか？</label>
              <select
                value={settings.partner}
                onChange={(e) => setSettings({ ...settings, partner: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white text-black text-sm appearance-none"
              >
                {partners.map((partner) => (
                  <option key={partner} value={partner}>
                    {partner}
                  </option>
                ))}
              </select>
            </div>

            {/* 会話回数選択 */}
            <div className="space-y-2">
              <label className="block text-sm">何回目のお見合いですか？</label>
              <div className="flex gap-4 bg-white rounded-xl p-2">
                <button
                  onClick={() => setSettings({ ...settings, isFirstTime: true })}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm ${
                    settings.isFirstTime
                      ? 'bg-[#F4A261] text-white'
                      : 'text-black'
                  }`}
                >
                  初めて
                </button>
                <button
                  onClick={() => setSettings({ ...settings, isFirstTime: false })}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm ${
                    !settings.isFirstTime
                      ? 'bg-[#F4A261] text-white'
                      : 'text-black'
                  }`}
                >
                  それ以外
                </button>
              </div>
            </div>

            {/* シナリオ選択 */}
            <div className="space-y-2">
              <label className="block text-sm">シナリオを選択してください</label>
              <select
                value={settings.scenario}
                onChange={(e) => setSettings({ ...settings, scenario: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white text-black text-sm appearance-none"
              >
                <option value="自己紹介">自己紹介</option>
                <option value="趣味の話">趣味の話</option>
                <option value="仕事の話">仕事の話</option>
                <option value="休日の過ごし方">休日の過ごし方</option>
              </select>
            </div>
          </div>

          {/* 開始ボタン */}
          <div className="mt-12">
            <button
              onClick={handleStartPractice}
              className="w-full py-4 bg-[#F4A261] rounded-full text-white text-base hover:bg-opacity-90 transition-colors"
            >
              練習開始！
            </button>
          </div>
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