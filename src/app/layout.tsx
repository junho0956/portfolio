import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '포트폴리오 - 김준호',
  description: '프론드엔드 개발자 김준호',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
