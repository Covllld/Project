import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Container, Paper, TextInput, PasswordInput, Button, Title } from '@mantine/core'

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Basic login handling - implement actual login logic here
    try {
      await login()
      navigate('/panel')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center">Welcome Back</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Username"
            placeholder="Your username"
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Button type="submit" fullWidth mt="xl">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default Login