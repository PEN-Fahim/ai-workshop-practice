# AI workshop · practice repo

A tiny login page (EduPay) with a real bug. Practice for the October AI workshop.
No client code, no real data. Break things freely.

## TICKET-12 · Wrong password shows no error

When the password is wrong, the login page does nothing.

- Show a red message under the password field
- Use our `Input` component from `src/components/ui`
- Add a test for the wrong-password case
- File: `src/pages/LoginPage.tsx`

## TICKET-13 · Bonus: password strength (if you finish early)

On the signup page (`npm run dev`, then open `/#signup`), show how strong the password is, under the password field:

- Short or simple password → show **Weak**
- Long password with letters, numbers and symbols → show **Strong**
- File: `src/pages/SignupPage.tsx`

Read `CLAUDE.md` before you start. The checks will notice if you break a rule.

## How to do it

1. **Fork** this repo to your GitHub account, then clone your fork.
2. `npm install` (do this before the session)
3. `npm run dev` to see the page · `npm test` to run tests
4. Fix TICKET-12 **with AI** (Claude Code or ChatGPT). Use the "before Enter" checklist.
5. Push to a branch and open a **pull request to this repo** titled `TICKET-12 · your name`.

Every pull request is checked automatically and appears on the live board:

| Check | What it means |
|---|---|
| Existing tests | You didn't break anything |
| TICKET-12 fixed | The error really shows, on the password field |
| No new packages | AI didn't sneak in a dependency |
| No unsafe HTML | No `dangerouslySetInnerHTML` |
| Test added | You wrote or changed a test |

Login that works: `demo@edupay.test` / `correct-horse`
