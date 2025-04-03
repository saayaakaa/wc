"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { FeedbackMessage } from "./FeedbackMessage"

export function FeedbackContent() {
  const router = useRouter()

  // チェックボックスの状態管理
  const [checkedItems, setCheckedItems] = useState({
    goodPoints: Array(3).fill(false),
    improvementPoints: Array(3).fill(false)
  })

  // モーダルの表示状態管理
  const [showModal, setShowModal] = useState(false)

  // チェックボックスの状態を更新
  const handleCheckboxChange = (category: 'goodPoints' | 'improvementPoints', index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [category]: prev[category].map((checked: boolean, i: number) => 
        i === index ? !checked : checked
      )
    }))
  }

  // チェックリストに登録
  const handleSaveToChecklist = async () => {
    // TODO: DBに保存する処理を実装
    console.log('Selected items:', checkedItems)
    setShowModal(true)
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-black">
      <main className="max-w-[430px] mx-auto px-6 py-8">
        {/* ヘッダー */}
        <h1 className="text-2xl font-bold text-[#F4A261] mb-8 text-center">FeedBack Sheet</h1>

        {/* アバターとコメント */}
        <FeedbackMessage />

        <p className="text-xs text-gray-400 mb-4 pl-6">
          気に入った内容はチェックリストに登録して後から見直そう
        </p>

        {/* 良かった点 */}
        <div className="bg-[#FFF3D6] rounded-xl p-6 mb-6 h-auto">
          <h2 className="text-lg font-bold mb-4">素晴らしい！</h2>
          <div className="space-y-3 flex flex-col">
            {[
              "相手の趣味に興味を持って質問できました",
              "話の流れに合わせて自然な返事ができました",
              "適切なタイミングで相槌を打てていました"
            ].map((point, index) => (
              <label key={index} className="flex items-start gap-2 flex-grow">
                <input
                  type="checkbox"
                  checked={checkedItems.goodPoints[index]}
                  onChange={() => handleCheckboxChange('goodPoints', index)}
                  className="mt-1"
                />
                <span className="text-sm">{point}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 改善点 */}
        <div className="bg-[#E3F2FD] rounded-xl p-6 mb-8 h-auto">
          <h2 className="text-lg font-bold mb-4">意識してみよう ✨</h2>
          <div className="space-y-3 flex flex-col">
            {[
              "相手の発言に対してもう一歩踏み込んだ質問をしてみましょう",
              "会話の間で適度な間を取り入れてみましょう",
              "相手の興味がある話題をより深掘りしてみましょう"
            ].map((point, index) => (
              <label key={index} className="flex items-start gap-2 flex-grow">
                <input
                  type="checkbox"
                  checked={checkedItems.improvementPoints[index]}
                  onChange={() => handleCheckboxChange('improvementPoints', index)}
                  className="mt-1"
                />
                <span className="text-sm">{point}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ボタン */}
        <div className="flex gap-4">
          <button
            onClick={handleSaveToChecklist}
            className="flex-1 py-4 bg-white border-2 border-[#F4A261] rounded-full text-[#F4A261] font-bold flex items-center justify-center gap-2"
          >
            <span className="material-icons">✓</span>
            リストに登録
          </button>
          <Link
            href="/kaiwa/select"
            className="flex-1 py-4 bg-[#2C2C2C] rounded-full text-white text-center block"
          >
            もう一度練習する
          </Link>
        </div>
      </main>

      {/* 登録完了モーダル */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[80%] max-w-[300px]">
            <p className="text-center mb-6">チェックリストに登録完了</p>
            <div className="space-y-2">
              <Link
                href="/checklist"
                className="block w-full py-2 bg-[#F4A261] rounded-full text-white text-center"
              >
                チェックリストを見る
              </Link>
              <Link
                href="/kaiwa/select"
                className="block w-full py-2 bg-[#2C2C2C] rounded-full text-white text-center"
              >
                FBへ戻る
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 