import '../styles/globals.scss'
import '../styles/colors.scss'
import i18n from "../i18next/i18nextConf";
import { useTranslation } from "react-i18next";
import dynamic from 'next/dynamic'
import Navbar from "./components/navbar"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
