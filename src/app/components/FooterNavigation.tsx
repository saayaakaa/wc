import Link from "next/link"
import { Home, User } from "lucide-react"

export function FooterNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 py-4 border-t border-gray-200">
      <div className="max-w-[430px] mx-auto px-6">
        <div className="flex justify-between">
          <Link href="/" className="flex flex-col items-center">
            <Home className="w-6 h-6 text-[#F4A261]" />
            <span className="text-sm text-[#F4A261] mt-1">Home</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center">
            <User className="w-6 h-6 text-gray-400" />
            <span className="text-sm text-gray-400 mt-1">Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  )
} 