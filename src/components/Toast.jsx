import { useEffect, useState } from 'react'

export default function Toast({ message, onDismiss }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Trigger enter animation
    requestAnimationFrame(() => setVisible(true))
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onDismiss, 300)
    }, 3500)
    return () => clearTimeout(timer)
  }, [onDismiss])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        background: '#111827',
        color: 'white',
        borderRadius: '10px',
        padding: '13px 18px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
        fontSize: '13.5px',
        fontWeight: '500',
        minWidth: '280px',
        maxWidth: '380px',
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.28s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease',
      }}
    >
      {/* Green check circle */}
      <div style={{
        width: '28px', height: '28px', borderRadius: '50%',
        background: '#16A34A', display: 'flex', alignItems: 'center',
        justifyContent: 'center', flexShrink: 0,
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 7L5.5 10.5L11.5 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ color: 'white', fontWeight: '600', fontSize: '13px' }}>Added successfully!</div>
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginTop: '2px', fontWeight: '400' }}>
          "{message}" has been created.
        </div>
      </div>

      <button
        onClick={() => { setVisible(false); setTimeout(onDismiss, 300) }}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'rgba(255,255,255,0.45)', padding: '2px', lineHeight: 0,
          flexShrink: 0,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'white' }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}
