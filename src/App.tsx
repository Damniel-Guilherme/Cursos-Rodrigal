import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'

function Dashboard() {
  return <h1 style={{ color: 'white', padding: 40 }}>Bem-vindo ao Dashboard</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App