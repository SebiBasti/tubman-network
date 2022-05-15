import whatWeDo from '../styles/whatWeDo.module.scss'
import {useTranslation} from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function WhatWeDo() {
  const { t } = useTranslation('common');
  return (
    <section className={ whatWeDo.container }>
      <h2 className={ whatWeDo.header }>{t("whatWeDo.header")}</h2>
      <img className={ whatWeDo.image } src="/what_we_do.jpeg" alt={t("whatWeDo.pictureAlt")}/>
      <div className={ whatWeDo.content }>
        <p>
          {t("whatWeDo.content1")}
        </p>
        <p>
          {t("whatWeDo.content2")}
        </p>
        <p>
          {t("whatWeDo.content3")}
        </p>
        <p>
          {t("whatWeDo.content4")}
        </p>
        <p>
          {t("whatWeDo.content5")}
        </p>
        <p>
          {t("whatWeDo.content6")}
        </p>
        <p>
          {t("whatWeDo.content7")}
        </p>
        <p>
          {t("whatWeDo.content8")}
        </p>
      </div>
    </section>
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

export default WhatWeDo
