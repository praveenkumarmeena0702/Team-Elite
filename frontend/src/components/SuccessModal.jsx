import { useApp } from '../context/AppContext'

export default function SuccessModal() {
  const { showModal, setShowModal, user } = useApp()

  if (!showModal) return null

  return (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>☕</div>
        <h4>Login Successful!</h4>
        <p>Welcome to Cafena Coffee Shop, <strong>{user?.username}</strong>!</p>
        <button className="btn-custom" onClick={() => setShowModal(false)}>
          Close
        </button>
      </div>
    </div>
  )
}
