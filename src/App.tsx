import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import Login from '../pages/Login'
import ProtectedRoute from './assets/components/ProtectedRoute'
import { auth } from './services/firebase'

function Dashboard() {
  const navigate = useNavigate()

  async function handleLogout() {
    await signOut(auth)
    navigate('/')
  }

  return (
    <div style={{ color: 'white', padding: 40 }}>
      <h1>Bem-vindo ao Dashboard</h1>

      <button onClick={handleLogout}>
        Sair
      </button>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App