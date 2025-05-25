import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const login = async (username, password) => {
    try {
      const response = await axios.post('/panel/login', { username, password })
      setUser({ username })
      navigate('/panel')
      return { success: true }
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.error || 'Login failed'
      }
    }
  }

  const logout = async () => {
    await axios.get('/panel/logout')
    setUser(null)
    navigate('/panel/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)