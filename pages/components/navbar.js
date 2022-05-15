import navbar from '../../styles/navbar.module.scss'
import Link from 'next/link'
import dynamic from "next/dynamic"
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#e3f2fd'
    }
  }
});

const LanguageSelect = dynamic(
  () => import('./languageSelect'),
  { ssr: false }
)

function Navbar() {
  const { t } = useTranslation('common');
  // about us
  const [aboutUsEl, setAboutUsEl] = useState(null);
  const openAboutUs = Boolean(aboutUsEl);
  const handleAboutUsClick = (event) => {
    setAboutUsEl(event.currentTarget);
  };
  const handleAboutUsClose = () => {
    setAboutUsEl(null);
  };
  // activities
  const [activitiesEl, setActivitiesEl] = useState(null);
  const openActivities = Boolean(activitiesEl);
  const handleActivitiesClick = (event) => {
    setActivitiesEl(event.currentTarget);
  };
  const handleActivitiesClose = () => {
    setActivitiesEl(null);
  };
  // locations
  const [locationsEl, setLocationsEl] = useState(null);
  const openLocations = Boolean(locationsEl);
  const handleLocationsClick = (event) => {
    setLocationsEl(event.currentTarget);
  };
  const handleLocationsClose = () => {
    setLocationsEl(null);
  };
  // press
  const [pressEl, setPressEl] = useState(null);
  const openPress = Boolean(pressEl);
  const handlePressClick = (event) => {
    setPressEl(event.currentTarget);
  };
  const handlePressClose = () => {
    setPressEl(null);
  };
  // news
  const [newsEl, setNewsEl] = useState(null);
  const openNews = Boolean(newsEl);
  const handleNewsClick = (event) => {
    setNewsEl(event.currentTarget);
  };
  const handleNewsClose = () => {
    setNewsEl(null);
  };
  // archive
  const [archiveEl, setArchiveEl] = useState(null);
  const openArchive = Boolean(archiveEl);
  const handleArchiveClick = (event) => {
    setArchiveEl(event.currentTarget);
  };
  const handleArchiveClose = () => {
    setArchiveEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <header className={navbar.container}>
        <input type="checkbox" id="nav-toggle" className={navbar.toggle}/>
        <Link href={"/"}>
          <img src="/tubman_logo.png" alt={t("navbar.logoAlt")}/>
        </Link>
        <nav className={navbar.nav}>
          <ul>
            <li>
              <div>
                <Button
                  id="about-us-button"
                  aria-controls={openAboutUs ? 'about-us-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openAboutUs ? 'true' : undefined}
                  onClick={handleAboutUsClick}
                >
                  {t("navbar.aboutUs.header")}
                </Button>
                <Menu
                  id="about-us-menu"
                  anchorEl={aboutUsEl}
                  open={openAboutUs}
                  onClose={handleAboutUsClose}
                  MenuListProps={{
                    'aria-labelledby': 'about-us-button',
                  }}
                >
                  <MenuItem onClick={handleAboutUsClose} disabled={ true }>{t("navbar.aboutUs.item1")}</MenuItem>
                  <MenuItem onClick={handleAboutUsClose} disabled={ true }>{t("navbar.aboutUs.item2")}</MenuItem>
                  <MenuItem onClick={handleAboutUsClose} disabled={ true }>{t("navbar.aboutUs.item3")}</MenuItem>
                  <MenuItem onClick={handleAboutUsClose} disabled={ true }>{t("navbar.aboutUs.item4")}</MenuItem>
                  <MenuItem onClick={handleAboutUsClose} disabled={ true }>{t("navbar.aboutUs.item5")}</MenuItem>
                  <MenuItem onClick={handleAboutUsClose} disabled={ true }>{t("navbar.aboutUs.item6")}</MenuItem>
                  <MenuItem onClick={handleAboutUsClose}>
                    <Link href={ "/what_we_do"}>
                      <a>{t("navbar.aboutUs.item7")}</a>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleAboutUsClose}>
                    <Link href={ "/what_we_offer"}>
                      <a>{t("navbar.aboutUs.item8")}</a>
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </li>
            <li>
              <div>
                <Button
                  id="activities-button"
                  aria-controls={openActivities ? 'activities-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openActivities ? 'true' : undefined}
                  onClick={handleActivitiesClick}
                >
                  {t("navbar.activities.header")}
                </Button>
                <Menu
                  id="activities-menu"
                  anchorEl={activitiesEl}
                  open={openActivities}
                  onClose={handleActivitiesClose}
                  MenuListProps={{
                    'aria-labelledby': 'activities-button',
                  }}
                >
                  <MenuItem onClick={handleActivitiesClose} disabled={ true }>{t("navbar.activities.item1")}</MenuItem>
                  <MenuItem onClick={handleActivitiesClose} disabled={ true }>{t("navbar.activities.item2")}</MenuItem>
                  <MenuItem onClick={handleActivitiesClose} disabled={ true }>{t("navbar.activities.item3")}</MenuItem>
                  <MenuItem onClick={handleActivitiesClose} disabled={ true }>{t("navbar.activities.item4")}</MenuItem>
                  <MenuItem onClick={handleActivitiesClose} disabled={ true }>{t("navbar.activities.item5")}</MenuItem>
                  <MenuItem onClick={handleActivitiesClose} disabled={ true }>{t("navbar.activities.item6")}</MenuItem>
                  <MenuItem onClick={handleActivitiesClose} disabled={ true }>{t("navbar.activities.item7")}</MenuItem>
                  <MenuItem onClick={handleActivitiesClose} disabled={ true }>{t("navbar.activities.item8")}</MenuItem>
                  <MenuItem onClick={handleActivitiesClose} disabled={ true }>{t("navbar.activities.item9")}</MenuItem>
                  <MenuItem onClick={handleActivitiesClose} disabled={ true }>{t("navbar.activities.item10")}</MenuItem>
                  <MenuItem onClick={handleActivitiesClose} disabled={ true }>{t("navbar.activities.item11")}</MenuItem>
                  <MenuItem onClick={handleActivitiesClose} disabled={ true }>{t("navbar.activities.item12")}</MenuItem>
                  <MenuItem onClick={handleActivitiesClose} disabled={ true }>{t("navbar.activities.item13")}</MenuItem>
                </Menu>
              </div>
            </li>
            <li>
              <div>
                <Button
                  id="locations-button"
                  aria-controls={openLocations ? 'locations-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openLocations ? 'true' : undefined}
                  onClick={handleLocationsClick}
                >
                  {t("navbar.locations.header")}
                </Button>
                <Menu
                  id="Locations-menu"
                  anchorEl={locationsEl}
                  open={openLocations}
                  onClose={handleLocationsClose}
                  MenuListProps={{
                    'aria-labelledby': 'locations-button',
                  }}
                >
                  <MenuItem onClick={handleLocationsClose} disabled={ true }>Dammweg 216</MenuItem>
                  <MenuItem onClick={handleLocationsClose} disabled={ true }>Meeringdamm 20</MenuItem>
                  <MenuItem onClick={handleLocationsClose} disabled={ true }>{t("navbar.locations.item3")}</MenuItem>
                </Menu>
              </div>
            </li>
            <li>
              <Link href="/faq">
                <Button>{t("navbar.faq.header")}</Button>
              </Link>
            </li>
            <li>
              <div>
                <Button
                  id="press-button"
                  aria-controls={openPress ? 'press-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openPress ? 'true' : undefined}
                  onClick={handlePressClick}
                >
                  {t("navbar.press.header")}
                </Button>
                <Menu
                  id="press-menu"
                  anchorEl={pressEl}
                  open={openPress}
                  onClose={handlePressClose}
                  MenuListProps={{
                    'aria-labelledby': 'press-button',
                  }}
                >
                  <MenuItem onClick={handlePressClose} disabled={ true }>{t("navbar.press.item1")}</MenuItem>
                  <MenuItem onClick={handlePressClose} disabled={ true }>{t("navbar.press.item2")}</MenuItem>
                </Menu>
              </div>
            </li>
            <li>
              <div>
                <Button
                  id="news-button"
                  aria-controls={openNews ? 'news-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openNews ? 'true' : undefined}
                  onClick={handleNewsClick}
                >
                  {t("navbar.news.header")}
                </Button>
                <Menu
                  id="news-menu"
                  anchorEl={newsEl}
                  open={openNews}
                  onClose={handleNewsClose}
                  MenuListProps={{
                    'aria-labelledby': 'news-button',
                  }}
                >
                  <MenuItem onClick={handleNewsClose} disabled={ true }>{t("navbar.news.item1")}</MenuItem>
                  <MenuItem onClick={handleNewsClose} disabled={ true }>{t("navbar.news.item2")}</MenuItem>
                </Menu>
              </div>
            </li>
            <li>
              <div>
                <Button
                  id="archive-button"
                  aria-controls={openArchive ? 'archive-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openArchive ? 'true' : undefined}
                  onClick={handleArchiveClick}
                >
                  {t("navbar.archive.header")}
                </Button>
                <Menu
                  id="archive-menu"
                  anchorEl={archiveEl}
                  open={openArchive}
                  onClose={handleArchiveClose}
                  MenuListProps={{
                    'aria-labelledby': 'archive-button',
                  }}
                >
                  <MenuItem onClick={handleArchiveClose} disabled={ true }>{t("navbar.archive.item1")}</MenuItem>
                  <MenuItem onClick={handleArchiveClose} disabled={ true }>{t("navbar.archive.item2")}</MenuItem>
                </Menu>
              </div>
            </li>
          </ul>
          <label htmlFor="nav-toggle" className={navbar['toggle-label-arrow']}>
            <span/>
          </label>
        </nav>
        <LanguageSelect/>
        <label htmlFor="nav-toggle" className={navbar['toggle-label']}>
          <span/>
        </label>
      </header>
    </ThemeProvider>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale),
  },
})

export default Navbar;