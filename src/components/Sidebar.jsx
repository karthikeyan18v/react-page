const NAV_SECTIONS = [
  {
    label: 'MY PROJECTS',
    items: [
      {
        id: 'agents',
        label: 'Agents',
        icon: (
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.3" />
            <rect x="10" y="1.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.3" />
            <rect x="1.5" y="10" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.3" />
            <rect x="10" y="10" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        ),
      },
      {
        id: 'ai-models',
        label: 'AI Models',
        icon: (
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r="6" stroke="currentColor" strokeWidth="1.3" />
            <path d="M5 10C5.6 11.6 6.9 12.5 8.5 12.5C10.1 12.5 11.4 11.6 12 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <circle cx="6" cy="7" r="1" fill="currentColor" />
            <circle cx="11" cy="7" r="1" fill="currentColor" />
          </svg>
        ),
      },
      {
        id: 'library',
        label: 'Library',
        icon: (
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <rect x="1.5" y="2.5" width="3" height="12" rx="0.6" stroke="currentColor" strokeWidth="1.3" />
            <rect x="6.5" y="2.5" width="3" height="12" rx="0.6" stroke="currentColor" strokeWidth="1.3" />
            <path d="M11 3.5L15 5V14.5L11 13V3.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'ORCHESTRATOR',
    items: [
      {
        id: 'published',
        label: 'Published',
        icon: (
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <rect x="1.5" y="1.5" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M4.5 8.5L7.5 11.5L12.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        id: 'machines',
        label: 'Machines',
        icon: (
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <rect x="1.5" y="3" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M5.5 15H11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M8.5 12V15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M4.5 7H12.5M4.5 9.5H8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        id: 'queues',
        label: 'Queues',
        icon: (
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M2 4.5H15M2 8.5H15M2 12.5H10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        id: 'triggers',
        label: 'Triggers',
        icon: (
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M9.5 1.5L4 9.5H8.5L7.5 15.5L13 7.5H8.5L9.5 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        id: 'jobs',
        label: 'Jobs',
        icon: (
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <rect x="2" y="2" width="13" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M5 6H12M5 8.5H12M5 11H8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        id: 'executions',
        label: 'Executions',
        icon: (
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r="6.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M7 5.5V11.5L12 8.5L7 5.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        id: 'vault',
        label: 'Vault',
        icon: (
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <rect x="2" y="2" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="8.5" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="8.5" cy="8.5" r="0.8" fill="currentColor" />
            <path d="M11 8.5H13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        id: 'knowledge-base',
        label: 'Knowledge Base',
        icon: (
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <rect x="1.5" y="1.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
            <rect x="9.5" y="1.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
            <rect x="1.5" y="9.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
            <rect x="9.5" y="9.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        ),
      },
      {
        id: 'key-store',
        label: 'Key Store',
        icon: (
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <circle cx="6.5" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M9.2 9.8L15 15.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M11.5 12L13.5 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'ADMIN',
    items: [
      {
        id: 'tenant',
        label: 'Tenant',
        icon: (
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M1.5 15V7L8.5 1.5L15.5 7V15H11V10H6V15H1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        id: 'integrations',
        label: 'Integrations',
        icon: (
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <circle cx="3.5" cy="8.5" r="2.2" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="13.5" cy="4" r="2.2" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="13.5" cy="13" r="2.2" stroke="currentColor" strokeWidth="1.3" />
            <path d="M5.7 8.5H9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M9.5 8.5L11.3 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M9.5 8.5L11.3 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
]

export default function Sidebar({ activeItem = 'knowledge-base' }) {
  return (
    <aside
      className="flex-shrink-0 bg-white flex flex-col overflow-y-auto"
      style={{ width: '190px', borderRight: '1px solid #E5E7EB' }}
    >
      {NAV_SECTIONS.map((section) => (
        <div key={section.label} className="pt-6">
          <p
            className="px-5 mb-2 font-semibold uppercase text-gray-400"
            style={{ fontSize: '10px', letterSpacing: '0.09em' }}
          >
            {section.label}
          </p>
          <nav className="flex flex-col">
            {section.items.map((item) => {
              const isActive = item.id === activeItem
              return (
                <button
                  key={item.id}
                  className="flex items-center gap-3 transition-colors text-left"
                  style={{
                    padding: '8px 16px 8px 17px',
                    backgroundColor: isActive ? '#EEF2FF' : 'transparent',
                    borderLeft: isActive ? '3px solid #4F46E5' : '3px solid transparent',
                    color: isActive ? '#4F46E5' : '#6B7280',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = '#F9FAFB'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <span style={{ color: isActive ? '#4F46E5' : '#9CA3AF', flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: isActive ? '500' : '400', lineHeight: 1.3 }}>
                    {item.label}
                  </span>
                </button>
              )
            })}
          </nav>
        </div>
      ))}
      <div className="pb-6" />
    </aside>
  )
}
