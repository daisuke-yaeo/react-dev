import styles from './page.module.css'
import { apiFetch } from '@/lib/api'

export default async function Home() {
  const users = await apiFetch('/api/users', {
    method: 'GET',
  })
  console.log(users, 'res')

  if ('error' in users) {
    return <div className="text-red-500">Error: {users.error}</div>
  }

  return <div className={styles.page}>HOME</div>
}
