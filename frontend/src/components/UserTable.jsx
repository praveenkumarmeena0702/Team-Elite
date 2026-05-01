import { useApp } from '../context/AppContext'

export default function UserTable() {
  const { users } = useApp()
  if (!users.length) return null

  return (
    <div className="table-container">
      <h3 className="table-title">Registered User Data</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
