'use client'

import { logout } from '@/app/actions/auth'
import { useActionState } from 'react'

export default function LogoutButton() {
  const [state, action, pending] = useActionState(logout, undefined)

  return (
    <form action={action}>
      <button disabled={pending} type="submit">
        Çıkış Yap
      </button>
    </form>
  )
}
