import { Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../../services/firebase'

type Props = {
  children: React.ReactNode
}

function ProtectedRoute({ children }: Props) {
  const [loading, setLoading] = useState(true)
  const [isAllowed, setIsAllowed] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setIsAllowed(false)
        setLoading(false)
        return
      }

      await user.reload()

      if (user.emailVerified) {
        setIsAllowed(true)
      } else {
        setIsAllowed(false)
      }

      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return <h1 style={{ color: 'white', padding: 40 }}>Carregando...</h1>
  }

  if (!isAllowed) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute