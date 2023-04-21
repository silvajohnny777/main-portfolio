import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'// pages/_app.js
import { Roboto } from 'next/font/google'
import { appWithTranslation } from 'next-i18next'

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({ weight: ['100','300','400','500', '700','900'], preload: false, })

const App = ({ Component, pageProps }: AppProps) => {
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default appWithTranslation(App)