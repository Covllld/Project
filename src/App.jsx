import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppShell } from '@mantine/core'
import Layout from './components/Layout.jsx'
import Login from './pages/Login.jsx'
import Bots from './pages/Bots.jsx'
import Tasks from './pages/Tasks.jsx'
import Builds from './pages/Builds.jsx'
import Settings from './pages/Settings.jsx'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/panel/login" element={<Login />} />
          <Route path="/panel" element={<Layout />}>
            <Route index element={<Bots />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="builds" element={<Builds />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to="/panel" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App