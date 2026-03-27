import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import KnowledgeBaseCard from './components/KnowledgeBaseCard'
import CreateNewModal from './components/CreateNewModal'
import Pagination from './components/Pagination'
import Toast from './components/Toast'

const SAMPLE_KNOWLEDGE_BASES = [
  {
    id: 1,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: '14/07/2025',
  },
  {
    id: 2,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: '14/07/2025',
  },
  {
    id: 3,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: '14/07/2025',
  },
  {
    id: 4,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: '14/07/2025',
  },
  {
    id: 5,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: '14/07/2025',
  },
  {
    id: 6,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: '14/07/2025',
  },
]

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [toast, setToast] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = SAMPLE_KNOWLEDGE_BASES.filter((kb) =>
    kb.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    kb.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const paginated = filtered.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeItem="knowledge-base" />

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden bg-gray-50">
          {/* Page Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
            <h1 className="text-base font-semibold text-gray-900">Knowledge Base</h1>

            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1.5 bg-white">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gray-400">
                  <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="text-xs text-gray-700 placeholder-gray-400 focus:outline-none w-40"
                />
              </div>

              {/* Create New Button */}
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-white text-xs font-medium transition-colors hover:opacity-90 active:opacity-80"
                style={{ backgroundColor: '#4F46E5' }}
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M6.5 2V11M2 6.5H11" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                Create New
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="flex-1 overflow-y-auto p-6">
            {paginated.length > 0 ? (
              <div className="grid grid-cols-3 gap-4">
                {paginated.map((kb) => (
                  <KnowledgeBaseCard
                    key={kb.id}
                    title={kb.title}
                    description={kb.description}
                    createdOn={kb.createdOn}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-3">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M8 8H28L40 20V40H8V8Z" stroke="#D1D5DB" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M28 8V20H40" stroke="#D1D5DB" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M16 28H32M16 34H24" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p className="text-sm">No Knowledge Bases Found</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <Pagination
            totalRows={filtered.length}
            rowsPerPage={rowsPerPage}
            currentPage={currentPage}
            onRowsPerPageChange={(n) => { setRowsPerPage(n); setCurrentPage(1) }}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>

      {/* Create New Modal */}
      {showModal && (
        <CreateNewModal
          onClose={() => setShowModal(false)}
          onSuccess={(name) => setToast(name)}
        />
      )}

      {/* Success Toast */}
      {toast && <Toast message={toast} onDismiss={() => setToast(null)} />}
    </div>
  )
}
