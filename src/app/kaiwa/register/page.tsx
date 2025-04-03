"use client"

import Link from "next/link"
import { Home, User, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    origin: "",
    hobby: "",
    restDay: ""
  })

  const [errors, setErrors] = useState({
    name: false,
    age: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // バリデーションチェック
    const newErrors = {
      name: formData.name.trim() === "",
      age: formData.age === ""
    }
    setErrors(newErrors)

    // エラーがある場合は処理を中断
    if (newErrors.name || newErrors.age) {
      return
    }

    // ここで登録処理を実装
    console.log(formData)
    // 登録完了画面へ遷移
    router.push("/kaiwa/register/done")
  }

  return (
    <div className="min-h-screen bg-[#2C2C2C] text-white flex flex-col">
      {/* ヘッダー */}
      <header className="pt-8 px-6">
        <div className="flex items-center mb-8 max-w-[430px] mx-auto">
          <Link href="/kaiwa/select" className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-base font-bold text-center flex-1 pr-6">
            お相手について教えてください<div className=""></div>
          </h1>
        </div>
      </header>

      <main className="px-6 pb-40 flex-1">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-[430px] mx-auto">
          <div className="space-y-2">
            <label className="block text-white text-sm">
              名前を教えてください<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value })
                setErrors({ ...errors, name: false })
              }}
              placeholder="Name"
              className={`w-full px-4 py-3 rounded-xl bg-white text-black text-sm ${
                errors.name ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">名前を入力してください</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-white text-sm">
              おいくつですか<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => {
                setFormData({ ...formData, age: e.target.value })
                setErrors({ ...errors, age: false })
              }}
              placeholder="40"
              className={`w-full px-4 py-3 rounded-xl bg-white text-black text-sm ${
                errors.age ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">年齢を入力してください</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-white text-sm">
              出身地はどこですか？
            </label>
            <input
              type="text"
              value={formData.origin}
              onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
              placeholder="愛知県"
              className="w-full px-4 py-3 rounded-xl bg-white text-black text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-white text-sm">
              趣味はなんですか
            </label>
            <textarea
              value={formData.hobby}
              onChange={(e) => setFormData({ ...formData, hobby: e.target.value })}
              placeholder="カメラが好きで風景写真をとったりする"
              className="w-full px-4 py-3 rounded-xl bg-white text-black text-sm min-h-[80px] resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-white text-sm">
              休日はどのように過ごしていますか
            </label>
            <textarea
              value={formData.restDay}
              onChange={(e) => setFormData({ ...formData, restDay: e.target.value })}
              placeholder="写真を撮りに出かけたり、カフェに行くことが多い&#10;映画鑑賞も好き"
              className="w-full px-4 py-3 rounded-xl bg-white text-black text-sm min-h-[80px] resize-none"
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full py-4 bg-[#F4A261] rounded-full text-white text-base hover:bg-opacity-90 transition-colors"
            >
              情報を登録する
            </button>
          </div>
        </form>
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