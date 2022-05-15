import infoHome from '../../styles/infoHome.module.scss'
import Link from "next/link";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {useTranslation} from "next-i18next";

const theme = createTheme({
  palette: {
    primary: {
      main: '#033744'
    }
  }
});

export default function InfoHome() {
  const { t } = useTranslation('common');
  return (
    <ThemeProvider theme={theme}>
      <section className={ infoHome.container }>
        <h2 className={ infoHome.header }>{t("infoHome.header")}</h2>
        <p className={ infoHome.content }>
          {t("infoHome.content1")}
        </p>
        <p className={ infoHome.content }>
          {t("infoHome.content2")}
        </p>
        <p className={ infoHome.content }>
          {t("infoHome.content3")}
        </p>
        <br/>
        <br/>
        <Link href="/about_us">
          <Button variant="outlined" className={ infoHome.link }>
            {t("infoHome.button")}
          </Button>
        </Link>
      </section>
    </ThemeProvider>
  )
}