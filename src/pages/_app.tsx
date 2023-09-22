import '@/styles/app.scss';
import type { AppProps } from 'next/app';
import { Prompt } from 'next/font/google'

const prompt = Prompt({
  weight: '400',
  subsets: ['latin'] 
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${prompt.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
    </>
  )
}
