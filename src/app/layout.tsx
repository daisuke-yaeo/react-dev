import type { Metadata } from 'next'
import './globals.scss'
import styles from './layout.module.scss'

export const metadata: Metadata = {
  title: 'react-dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className={styles.contentArea}>{children}</body>
    </html>
  )
}
