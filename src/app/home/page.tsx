import styles from './page.module.scss'
import { apiFetch } from '@/lib/api'

export default async function Home() {
  const users = await apiFetch('/api/users', {
    method: 'GET',
  })
  console.log(users, 'res')

  if ('error' in users) {
    return <div className="text-red-500">Error: {users.error}</div>
  }

  return (
    <div className={styles.homeContent}>
      <div className={styles.contentRow}>
        <div className={styles.panel}>
          <div className={`${styles.graph} ${styles.isSkeleton}`}></div>
          <div className={styles.unitWrapper}>
            <div className={`${styles.unitText}`}>・単位1</div>
            <div className={`${styles.unitText}`}>・単位2</div>
            <div className={`${styles.unitText}`}>・単位3</div>
          </div>
        </div>
        <div className={styles.panel}>
          <div className={`${styles.graph} ${styles.isSkeleton}`}></div>
          <div className={styles.unitWrapper}>
            <div className={`${styles.unitText} ${styles.isSkeleton}`}></div>
          </div>
        </div>
      </div>
      <div className={styles.contentRow}>
        <div className={styles.panel}>
          <div className={`${styles.graph} ${styles.isSkeleton}`}></div>
          <div className={styles.unitWrapper}>
            <div className={`${styles.unitText} ${styles.isSkeleton}`}></div>
          </div>
        </div>
        <div className={styles.panel}>
          <div className={`${styles.graph} ${styles.isSkeleton}`}></div>
          <div className={styles.unitWrapper}>
            <div className={`${styles.unitText} ${styles.isSkeleton}`}></div>
          </div>
        </div>
        <div className={styles.panel}>
          <div className={`${styles.graph} ${styles.isSkeleton}`}></div>
          <div className={styles.unitWrapper}>
            <div className={`${styles.unitText} ${styles.isSkeleton}`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
