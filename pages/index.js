import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useTranslation } from "react-i18next";
import Banner from "./components/banner"
import CarouselHome from "./components/CarouselHome";
import InfoHome from "./components/infoHome";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("head.title")}</title>
        <meta name="description" content={t("head.description")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner/>
      <InfoHome/>
      <CarouselHome/>
    </>
  )
}
