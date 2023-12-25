import type { Metadata } from 'next'
import './globals.css'
import styles from "@/app/page.module.css";
import Image from "next/image";
import {IMAGES} from "@/common/images";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'junho0956',
  description: '프론드엔드 / 김준호',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header className={styles.header}>
          <div className={styles.wrapper}>
            <Link href="/">
              <h1>junho0956</h1>
            </Link>
            <ul>
              <li>
                <a href="mailto:junho0956@naver.com">
                  <Image src={IMAGES.icon.email} alt="email" />
                </a>
              </li>
              <li>
                <Link href="https://github.com/junho0956" target="_blank">
                  <Image src={IMAGES.icon.github} alt="github" />
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
