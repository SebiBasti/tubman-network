import banner from '../../styles/banner.module.scss'
import Button from "@mui/material/Button"
import Link from "next/link"
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#05556b'
    }
  }
});

export default function Banner() {
  return (
    <ThemeProvider theme={theme}>
      <div className={ banner.container }>
        <h1>
          Every great dream begins with a dreamer.
        </h1>
        <Link href={ 'https://gofund.me/2ac05f02' }>
          <Button variant="contained">Donate</Button>
        </Link>
      </div>
    </ThemeProvider>
  )
}