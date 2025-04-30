import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LiffProvider } from './providers/LiffProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LINE Mini App',
  description: '会社のLINEミニアプリ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const liffId = process.env.NEXT_PUBLIC_LIFF_ID || '';
  
  return (
    <html lang="ja">
      <body className={inter.className}>
        <LiffProvider liffId={liffId}>
          {children}
        </LiffProvider>
      </body>
    </html>
  );
}