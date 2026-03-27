import { useState } from 'react'

function DotsMenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="3.5" r="1.2" fill="currentColor" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
      <circle cx="8" cy="12.5" r="1.2" fill="currentColor" />
    </svg>
  )
}

export default function KnowledgeBaseCard({ title, description, createdOn }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-3 hover:shadow-sm transition-shadow relative">
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <div className="relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-0.5 rounded hover:bg-gray-100"
          >
            <DotsMenuIcon />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-6 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-28 py-1">
              <button className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50">Edit</button>
              <button className="w-full text-left px-3 py-1.5 text-xs text-red-600 hover:bg-red-50">Delete</button>
            </div>
          )}
        </div>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed flex-1">{description}</p>

      <p className="text-xs text-gray-400">
        Created On: <span className="text-gray-500">{createdOn}</span>
      </p>
    </div>
  )
}
