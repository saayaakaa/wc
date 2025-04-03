"use client"

import { useState } from "react"

type UnlinkButtonProps = {
  partnerName: string
  onUnlink: (partnerName: string) => void
}

export default function UnlinkButton({ partnerName, onUnlink }: UnlinkButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-white border-2 border-gray-400 rounded-lg text-gray-600 text-sm hover:bg-gray-50"
      >
        解除する
      </button>

      {/* モーダル */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="bg-white rounded-xl p-6 max-w-[300px] w-full mx-4 relative z-10">
            <h3 className="text-black text-lg font-bold mb-4 text-center">
              {partnerName}との会話を解除しますか？
            </h3>
            <div className="flex space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-3 bg-gray-200 rounded-xl text-black font-medium hover:bg-gray-300"
              >
                キャンセル
              </button>
              <button
                onClick={() => {
                  onUnlink(partnerName)
                  setIsModalOpen(false)
                }}
                className="flex-1 py-3 bg-[#F4A261] rounded-xl text-white font-medium hover:bg-opacity-90"
              >
                解除する
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 