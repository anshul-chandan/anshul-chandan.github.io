import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from '../routeTree.gen'
import { axe } from 'vitest-axe'
import * as vitestAxeMatchers from 'vitest-axe/matchers'

expect.extend(vitestAxeMatchers)

function renderHome() {
  const memoryHistory = createMemoryHistory({ initialEntries: ['/'] })
  const router = createRouter({ routeTree, history: memoryHistory })
  return render(<RouterProvider router={router} />)
}

describe('Home page accessibility', () => {
  it('has no axe violations', async () => {
    const { container } = renderHome()
    // Wait for the page to render
    await screen.findAllByRole('heading')
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
