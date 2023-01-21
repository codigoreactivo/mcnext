import Navbar from '@/components/Navbar'
import Cursor from '../components/Cursor'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Cursor />
    <Component {...pageProps} /> 
    </>
}
