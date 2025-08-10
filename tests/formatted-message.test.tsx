import { render, screen } from '@testing-library/react'
import React from 'react'
import { FormattedMessage } from '@/components/ui/formatted-message'

describe('FormattedMessage', () => {
  it('renders user message as plain text', () => {
    render(<FormattedMessage content="Hello" isUser />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('renders markdown for AI messages', () => {
    const md = '# Title\n\n- item1\n- item2\n\n`code`'
    render(<FormattedMessage content={md} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Title')
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })
})

