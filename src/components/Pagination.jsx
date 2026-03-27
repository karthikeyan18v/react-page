export default function Pagination({ totalRows, rowsPerPage, currentPage, onRowsPerPageChange, onPageChange }) {
  const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage))

  const navButtons = [
    { label: '«', action: () => onPageChange(1), disabled: currentPage === 1 },
    { label: '‹', action: () => onPageChange(currentPage - 1), disabled: currentPage === 1 },
    { label: '›', action: () => onPageChange(currentPage + 1), disabled: currentPage === totalPages },
    { label: '»', action: () => onPageChange(totalPages), disabled: currentPage === totalPages },
  ]

  return (
    <div
      className="flex items-center justify-between bg-white"
      style={{
        borderTop: '1px solid #E5E7EB',
        padding: '10px 20px',
        fontSize: '12px',
        color: '#6B7280',
      }}
    >
      {/* Left: row count */}
      <span style={{ color: '#374151', fontWeight: '400' }}>{totalRows} rows</span>

      {/* Right: controls */}
      <div className="flex items-center" style={{ gap: '20px' }}>
        {/* Rows per page */}
        <div className="flex items-center" style={{ gap: '8px' }}>
          <span>Rows per page</span>
          <div className="relative flex items-center">
            <select
              value={rowsPerPage}
              onChange={(e) => { onRowsPerPageChange(Number(e.target.value)) }}
              className="appearance-none bg-white focus:outline-none cursor-pointer"
              style={{
                border: '1px solid #D1D5DB',
                borderRadius: '4px',
                padding: '2px 22px 2px 8px',
                fontSize: '12px',
                color: '#374151',
              }}
            >
              {[5, 10, 20, 50].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute" style={{ right: '6px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2.5 3.5L5 6.5L7.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>

        {/* Page indicator */}
        <span>page {currentPage} of {totalPages}</span>

        {/* Nav arrows */}
        <div className="flex items-center" style={{ gap: '4px' }}>
          {navButtons.map(({ label, action, disabled }) => (
            <button
              key={label}
              onClick={action}
              disabled={disabled}
              style={{
                width: '26px',
                height: '26px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #D1D5DB',
                borderRadius: '4px',
                background: 'white',
                fontSize: '13px',
                color: disabled ? '#D1D5DB' : '#6B7280',
                cursor: disabled ? 'default' : 'pointer',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = '#F3F4F6' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'white' }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
