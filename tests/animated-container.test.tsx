import { render, screen } from '@testing-library/react'
import React from 'react'
import { AnimatedContainer } from '@/components/ui/animated-container'

// Basic smoke test to ensure it renders children
it('AnimatedContainer renders children', () => {
  render(<AnimatedContainer><div data-testid="child">Hello</div></AnimatedContainer>)
  expect(screen.getByTestId('child')).toBeInTheDocument()
})

