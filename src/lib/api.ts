const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'

/**
 * APIリクエストを送信する汎用関数
 */
export async function apiFetch(endpoint: string, options?: RequestInit) {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
      ...options,
    })

    if (!res.ok) {
      const errorData = await res.json()
      throw new Error(errorData.error || `Failed to fetch: ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
