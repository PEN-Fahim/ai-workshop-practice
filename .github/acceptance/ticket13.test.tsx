// Acceptance test for TICKET-13 (bonus). CI copies this into src/ and runs it on every pull request.
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignupPage } from '../pages/SignupPage'

test('TICKET-13: a short password shows "weak"', async () => {
  render(<SignupPage />)
  await userEvent.type(screen.getByLabelText('Password'), 'abc')
  expect(await screen.findByText(/weak/i)).toBeInTheDocument()
})

test('TICKET-13: a long mixed password shows "strong"', async () => {
  render(<SignupPage />)
  await userEvent.type(screen.getByLabelText('Password'), 'Correct-Horse-Battery-9')
  expect(await screen.findByText(/strong/i)).toBeInTheDocument()
})
