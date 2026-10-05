export type SignInResult = { ok: true; name: string } | { ok: false; message: string }

/** Fake auth for the workshop. The only valid login is demo@edupay.test / correct-horse. */
export async function signIn(email: string, password: string): Promise<SignInResult> {
  await new Promise(r => setTimeout(r, 50))
  if (email === 'demo@edupay.test' && password === 'correct-horse') {
    return { ok: true, name: 'Demo Student' }
  }
  return { ok: false, message: 'Wrong email or password.' }
}
