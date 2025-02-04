'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    // NOTE: Homeへリダイレクトさせる
    router.push('/home')
  }, [])

  return null
}
