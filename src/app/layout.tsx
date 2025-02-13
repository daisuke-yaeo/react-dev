import type { Metadata } from 'next'
import './globals.scss'
import styles from './layout.module.scss'
import Header from './ui/Header'

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
      <body>
        <Header />
        <main className={styles.contentArea}>{children}</main>
      </body>
    </html>
  )
}
