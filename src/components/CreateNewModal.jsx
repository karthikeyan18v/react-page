import { useState } from 'react'

const VECTOR_STORE_OPTIONS = ['Qdrant', 'Pinecone', 'Weaviate', 'Chroma']
const EMBEDDING_MODEL_OPTIONS = [
  'text-embedding-ada-002',
  'text-embedding-3-small',
  'text-embedding-3-large',
]

export default function CreateNewModal({ onClose, onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    description: '',
    vectorStore: 'Qdrant',
    embeddingModel: 'text-embedding-ada-002',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  function handleSubmit() {
    if (!form.name.trim()) { setErrors({ name: true }); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onSuccess(form.name.trim())
      onClose()
    }, 600)
  }

  const labelStyle = {
    fontSize: '13px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '6px',
    display: 'block',
  }

  const inputStyle = {
    width: '100%',
    border: '1px solid #D1D5DB',
    borderRadius: '6px',
    padding: '8px 12px',
    fontSize: '13px',
    color: '#111827',
    background: 'white',
    outline: 'none',
    boxSizing: 'border-box',
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.25)',
          zIndex: 40,
        }}
      />

      {/* Right drawer — full height */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '650px',
          background: 'white',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
        }}
      >
        {/* Header */}
        <div style={{ padding: '18px 20px 14px', borderBottom: '1px solid #F3F4F6' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#111827' }}>
                Create New Knowledge Base
              </h2>
              <p style={{ margin: '4px 0 0', fontSize: '11.5px', color: '#6B7280', lineHeight: 1.5 }}>
                Best for quick answers from documents, websites and text files.
              </p>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '2px', lineHeight: 0, color: '#9CA3AF', marginLeft: '8px', flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2.5 2.5L13.5 13.5M13.5 2.5L2.5 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>

          {/* Name */}
          <div style={{ marginBottom: '18px' }}>
            <label style={labelStyle}>
              Name (Cannot be edited later)<span style={{ color: '#EF4444', marginLeft: '2px' }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({}) }}
              style={{ ...inputStyle, borderColor: errors.name ? '#EF4444' : '#D1D5DB' }}
              onFocus={(e) => { e.target.style.borderColor = '#4F46E5'; e.target.style.boxShadow = '0 0 0 3px rgba(79,70,229,0.1)' }}
              onBlur={(e) => { e.target.style.borderColor = errors.name ? '#EF4444' : '#D1D5DB'; e.target.style.boxShadow = 'none' }}
            />
          </div>

          {/* Description */}
          <div style={{ marginBottom: '18px' }}>
            <label style={labelStyle}>Description</label>
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={5}
              style={{ ...inputStyle, resize: 'none', lineHeight: '1.5' }}
              onFocus={(e) => { e.target.style.borderColor = '#4F46E5'; e.target.style.boxShadow = '0 0 0 3px rgba(79,70,229,0.1)' }}
              onBlur={(e) => { e.target.style.borderColor = '#D1D5DB'; e.target.style.boxShadow = 'none' }}
            />
          </div>

          {/* Vector Store */}
          <div style={{ marginBottom: '18px' }}>
            <label style={labelStyle}>
              Vector Store<span style={{ color: '#EF4444', marginLeft: '2px' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <select
                value={form.vectorStore}
                onChange={(e) => setForm({ ...form, vectorStore: e.target.value })}
                style={{ ...inputStyle, appearance: 'none', paddingRight: '32px', cursor: 'pointer' }}
              >
                {VECTOR_STORE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
              </select>
              <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9CA3AF' }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2.5 4.5L6.5 8.5L10.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>

          {/* LLM Embedding Model */}
          <div style={{ marginBottom: '18px' }}>
            <label style={labelStyle}>
              LLM Embedding Model<span style={{ color: '#EF4444', marginLeft: '2px' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <select
                value={form.embeddingModel}
                onChange={(e) => setForm({ ...form, embeddingModel: e.target.value })}
                style={{ ...inputStyle, appearance: 'none', paddingRight: '32px', cursor: 'pointer' }}
              >
                {EMBEDDING_MODEL_OPTIONS.map((o) => <option key={o}>{o}</option>)}
              </select>
              <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9CA3AF' }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2.5 4.5L6.5 8.5L10.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Footer — Create button bottom-right */}
        <div style={{
          padding: '14px 20px',
          borderTop: '1px solid #F3F4F6',
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              padding: '8px 24px',
              borderRadius: '6px',
              border: 'none',
              background: loading ? '#818CF8' : '#4F46E5',
              color: 'white',
              fontSize: '13px',
              fontWeight: '500',
              cursor: loading ? 'default' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
            }}
          >
            {loading ? (
              <>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ animation: 'spin 0.8s linear infinite' }}>
                  <circle cx="6.5" cy="6.5" r="5" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                  <path d="M6.5 1.5C9.261 1.5 11.5 3.739 11.5 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Creating...
              </>
            ) : 'Create'}
          </button>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  )
}
