import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders with text and handles click', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click Me</Button>)
    const btn = screen.getByRole('button', { name: /click me/i })
    await userEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('applies variant and size classes', () => {
    render(<Button variant="accent" size="xl">Accent</Button>)
    const btn = screen.getByRole('button', { name: /accent/i })
    expect(btn.className).toContain('bg-gradient-to-r')
    expect(btn.className).toContain('text-xl')
  })

  it('disables when loading', () => {
    render(<Button loading>Loading</Button>)
    const btn = screen.getByRole('button', { name: /loading/i })
    expect(btn).toBeDisabled()
  })
})

