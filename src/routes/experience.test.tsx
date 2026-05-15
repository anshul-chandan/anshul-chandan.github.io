import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from '../routeTree.gen'
import { axe } from 'vitest-axe'
import * as vitestAxeMatchers from 'vitest-axe/matchers'

expect.extend(vitestAxeMatchers)

function renderExperience() {
  const memoryHistory = createMemoryHistory({ initialEntries: ['/experience'] })
  const router = createRouter({ routeTree, history: memoryHistory })
  render(<RouterProvider router={router} />)
}

describe('Experience page mobile accordion', () => {
  it('renders four toggle buttons, one per experience entry', async () => {
    renderExperience()
    const buttons = await screen.findAllByRole('button')
    expect(buttons).toHaveLength(4)
  })

  it('all entries start closed — [+] text and aria-expanded=false on all buttons', async () => {
    renderExperience()
    const buttons = await screen.findAllByRole('button')
    for (const btn of buttons) {
      expect(btn).toHaveTextContent('[+]')
      expect(btn).toHaveAttribute('aria-expanded', 'false')
    }
  })

  it('clicking [+] opens that entry — button shows [-] and aria-expanded=true', async () => {
    const user = userEvent.setup()
    renderExperience()
    const buttons = await screen.findAllByRole('button')
    await user.click(buttons[0])
    expect(buttons[0]).toHaveTextContent('[-]')
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
  })

  it('only one entry open at a time — opening second closes first', async () => {
    const user = userEvent.setup()
    renderExperience()
    const buttons = await screen.findAllByRole('button')
    await user.click(buttons[0]) // open first
    await user.click(buttons[1]) // open second → first should collapse
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'true')
  })

  it('clicking [-] closes the open entry', async () => {
    const user = userEvent.setup()
    renderExperience()
    const buttons = await screen.findAllByRole('button')
    await user.click(buttons[0]) // open
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
    await user.click(buttons[0]) // close
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
    expect(buttons[0]).toHaveTextContent('[+]')
  })
})

describe('Experience page accessibility', () => {
  it('has no axe violations', async () => {
    const memoryHistory = createMemoryHistory({ initialEntries: ['/experience'] })
    const router = createRouter({ routeTree, history: memoryHistory })
    const { container } = render(<RouterProvider router={router} />)
    // Wait for async rendering
    await screen.findAllByRole('button')
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
