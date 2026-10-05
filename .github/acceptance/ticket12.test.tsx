// Acceptance test for TICKET-12. CI copies this into src/ and runs it on every pull request.
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginPage } from '../pages/LoginPage'

test('TICKET-12: a wrong password shows an error under the password field', async () => {
  render(<LoginPage />)
  await userEvent.type(screen.getByLabelText('Email'), 'demo@edupay.test')
  await userEvent.type(screen.getByLabelText('Password'), 'wrong-password')
  await userEvent.click(screen.getByRole('button', { name: 'Log in' }))
  const alert = await screen.findByRole('alert')
  expect(alert).toHaveTextContent(/wrong|incorrect|invalid/i)
  expect(screen.getByLabelText('Password')).toHaveAttribute('aria-invalid', 'true')
})
