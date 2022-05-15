import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {useTranslation} from "next-i18next"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Banner from "./components/banner"
import CarouselHome from "./components/CarouselHome";
import InfoHome from "./components/infoHome";

function Home({ locale }) {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{t("head.title")}</title>
        <meta name="description" content={t("head.description")} />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <Banner/>
      <InfoHome/>
      <CarouselHome/>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}

export default Home