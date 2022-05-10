import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Head>
        <title>{t("head.title")}</title>
        <meta name="description" content={t("head.description")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} suppressHydrationWarning={true}>
          {t("title")}
        </h1>
      </main>
    </div>
  )
}
