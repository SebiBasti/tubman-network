import banner from '../../styles/banner.module.scss'
import Button from "@mui/material/Button"
import Link from "next/link"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {useTranslation} from "next-i18next";

const theme = createTheme({
  palette: {
    primary: {
      main: '#05556b'
    }
  }
});

export default function Banner() {
  const { t } = useTranslation('common');
  return (
    <ThemeProvider theme={theme}>
      <div className={ banner.container }>
        <h1>
          {t("banner.header")}
        </h1>
        <Link href={ 'https://gofund.me/2ac05f02' }>
          <Button variant="contained">{t("banner.donateButton")}</Button>
        </Link>
      </div>
    </ThemeProvider>
  )
}