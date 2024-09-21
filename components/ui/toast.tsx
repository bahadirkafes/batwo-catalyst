import { cn } from "@/lib/utils"
import { X } from 'lucide-react'
import React from 'react'

interface ToastProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

export const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow",
        {
          "text-green-500 bg-green-100": type === 'success',
          "text-red-500 bg-red-100": type === 'error'
        }
      )}
      role="alert"
    >
      <div className="ml-3 text-sm font-normal">{message}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
        onClick={onClose}
        aria-label="Schließen"
      >
        <X size={16} />
      </button>
    </div>
  )
}