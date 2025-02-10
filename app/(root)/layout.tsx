import StreamVideoProvider from '@/providers/StreamClientProvider';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Faiz-Zool",
  description: "Video Calling App",
  icons: {
    icon: "/icons/zool-logo.png",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
        <StreamVideoProvider>
        {children}
        </StreamVideoProvider>
    </main>
  )
}

export default RootLayout