import footer from '../../styles/footer.module.scss'
import Link from 'next/link'
import PhoneIcon from '@mui/icons-material/Phone'
import MailIcon from '@mui/icons-material/Mail'
import FeedIcon from '@mui/icons-material/Feed'
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import TelegramIcon from '@mui/icons-material/Telegram'
import Script from 'next/script'

export default function Footer() {

  return (
    <footer>
      <div className={ footer.container }>
        <div className={ footer.section }>
          <h3>Address</h3>
          <div className={ footer['section-content'] }>
            <p>Dammweg 216</p>
            <p>12057 Berlin</p>
            <br/>
            <iframe scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas"
                    src="https://maps.google.com/maps?width=250&amp;height=250&amp;hl=en&amp;q=Dammweg%20216%20Berlin+(Tubman%20Network)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="250" height="250" frameBorder="0"></iframe>
            <Script type='text/javascript'
                    src='https://embedmaps.com/google-maps-authorization/script.js?id=deb4b60c96ed20218c721a3a185e56d4b1c07fc6'>

            </Script>
          </div>
        </div>
        <div className={ footer.section }>
          <h3>Get in touch</h3>
          <div className={ footer['section-content'] }>
            <Link href={ "tel:+4915124685957"}>
              <a className={ footer['section-row']}>
                <PhoneIcon/>
                <p>+49 151-24685957</p>
              </a>
            </Link>
            <Link href={ "mailto:help@tubman.network" }>
              <a className={ footer['section-row']}>
                <MailIcon/>
                <p>help(at)tubman.network</p>
              </a>
            </Link>
            <Link href={ "mailto:presse@tubman.network" }>
              <a className={ footer['section-row']}>
                <FeedIcon/>
                <p>presse(at)tubman.network</p>
              </a>
            </Link>
            <Link href={ "mailto:it@tubman.network" }>
              <a className={ footer['section-row']}>
                <LaptopChromebookIcon/>
                <p>it(at)tubman.network</p>
              </a>
            </Link>
          </div>
        </div>
        <div className={ footer.section }>
          <h3>Follow us</h3>
          <div className={ footer['section-content'] }>
            <Link href={ "https://www.instagram.com/portal.tubman.network/" }>
              <a className={ footer['section-row']}>
                <InstagramIcon/>
                <p>Instagram</p>
              </a>
            </Link>
            <Link href={ "https://twitter.com/NetworkTubman" }>
              <a className={ footer['section-row']}>
                <TwitterIcon/>
                <p>Twitter</p>
              </a>
            </Link>
            <Link href={ "#" }>
              <a className={ footer['section-row']}>
                <TelegramIcon/>
                <p>Telegram</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <p className={ footer.imprint }>© 2022 TUBMAN.NETWORK</p>
    </footer>
  )
}