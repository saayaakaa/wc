import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-full bg-orange-400 text-white font-bold hover:opacity-90 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
