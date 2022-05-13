import infoHome from '../../styles/infoHome.module.scss'
import Link from "next/link";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#033744'
    }
  }
});

export default function InfoHome() {

  return (
    <ThemeProvider theme={theme}>
      <section className={ infoHome.container }>
        <h2 className={ infoHome.header }>we are tubman.network</h2>
        <p className={ infoHome.content }>
          We are an organization of volunteers in Berlin founded with the help of African and Afro-Diasporic associations,
          companies and individuals in February 2022. The start of our activity came as a reaction to the racially
          motivated human rights violations related to people fleeing from Ukrainian war zones. Currently, we are an
          association in formation: Tubman Network e.V. – Coalition of Black Organizations in Germany & Allies.
        </p>
        <p className={ infoHome.content }>
          In cooperation with our alliance partners we offer support in different areas of life to people of African and
          Afro-Diasporic origin affected by racism as well as BIPoC.
        </p>
        <p className={ infoHome.content }>
          Currently, our work focuses on providing free emergency assistance to people from third countries who have fled
          Ukraine. At our location in Neukölln, we process requests from an average of 100 people per day. Since our work
          is financed exclusively by private donations, we also ask for your help!
        </p>
        <br/>
        <br/>
        <Link href="/about_us">
          <Button variant="outlined" className={ infoHome.link }>
            read more
          </Button>
        </Link>
      </section>
    </ThemeProvider>
  )
}