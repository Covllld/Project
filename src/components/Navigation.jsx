import React from 'react'
import { NavLink } from 'react-router-dom'
import { Stack, UnstyledButton, Group, Text } from '@mantine/core'
import { IconRobot, IconList, IconPackage, IconSettings } from '@tabler/icons-react'

function Navigation() {
  const links = [
    { icon: IconRobot, label: 'Bots', to: '/panel' },
    { icon: IconList, label: 'Tasks', to: '/panel/tasks' },
    { icon: IconPackage, label: 'Builds', to: '/panel/builds' },
    { icon: IconSettings, label: 'Settings', to: '/panel/settings' }
  ]

  return (
    <Stack gap={0} p="md">
      {links.map((link) => (
        <UnstyledButton
          key={link.label}
          component={NavLink}
          to={link.to}
          style={({ isActive }) => ({
            backgroundColor: isActive ? 'var(--mantine-color-dark-6)' : 'transparent'
          })}
          p="md"
          w="100%"
        >
          <Group>
            <link.icon size={20} />
            <Text size="sm">{link.label}</Text>
          </Group>
        </UnstyledButton>
      ))}
    </Stack>
  )
}

export default Navigation