import React from "react"

type CardProps = {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`rounded-xl bg-white text-black shadow-md ${className}`}>
      {children}
    </div>
  )
}

export const CardContent = ({ children, className = "" }: CardProps) => {
  return <div className={`p-4 ${className}`}>{children}</div>
}
