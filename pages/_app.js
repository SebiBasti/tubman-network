import '../styles/globals.css'
import i18n from "../i18next/i18nextConf";
import { useTranslation } from "react-i18next";
import dynamic from 'next/dynamic'

const LanguageSelect = dynamic(
  () => import('./components/languageSelect'),
  { ssr: false }
)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LanguageSelect/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
