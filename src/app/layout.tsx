import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import { type ReactNode } from 'react'
import { cookieToInitialState } from 'wagmi'
import { Syne_Mono } from 'next/font/google'

import { getConfig } from '../wagmi'
import { Providers } from './providers'
import { SavedNumbersProvider } from './context/SavedNumbersContext'

const inter = Inter({ subsets: ['latin'] })
const syneMono = Syne_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Wagmi',
  description: 'Generated by create-wagmi',
}

export default function RootLayout(props: { children: ReactNode }) {
  const initialState = cookieToInitialState(
    getConfig(),
    headers().get('cookie'),
  )
  return (
    <html lang="en" className={syneMono.className}>
      <body className={inter.className}>
        <Providers initialState={initialState}>
          <SavedNumbersProvider>
            {props.children}
          </SavedNumbersProvider>
        </Providers>
      </body>
    </html>
  )
}
