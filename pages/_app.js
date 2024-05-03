import Layout from "@/components/ui/Layout";
import "@/styles/globals.css";
import { Inter } from 'next/font/google';
import { SessionProvider } from "next-auth/react";
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
    <main className={inter.className}>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
    </SessionProvider>
  );
}
