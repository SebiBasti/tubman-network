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
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from '!mapbox-gl'
import { useEffect, useRef, useState } from "react"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoic2ViaWJhc3RpIiwiYSI6ImNsMzRnaTlzYTAzbHAzam1xNjQ0czBwZHcifQ.mlpxyheaJvIuaQGFBr4PEg';

export default function Footer() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(13.4675671);
  const [lat, setLat] = useState(52.4727998);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
    const marker = new mapboxgl.Marker()
      .setLngLat([13.4675671, 52.4727998])
      .addTo(map.current);
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <footer>
      <div className={ footer.container }>
        <div className={ footer['section-map'] }>
          <h3>Address</h3>
          <div className={ footer['section-content'] }>
            <p>Dammweg 216</p>
            <p>12057 Berlin</p>
            <br/>
            <div ref={mapContainer} className={ footer.map } />
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