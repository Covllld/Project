import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { AppShell, Navbar } from '@mantine/core'
import Navigation from './Navigation.jsx'
import { useAuth } from '../context/AuthContext'

function Layout() {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/panel/login')
    }
  }, [user, navigate])

  return (
    <AppShell
      navbar={{ width: 300, breakpoint: 'sm' }}
      padding="md"
      styles={{
        main: {
          background: 'var(--mantine-color-dark-7)'
        }
      }}
    >
      <AppShell.Navbar>
        <Navigation />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default Layout