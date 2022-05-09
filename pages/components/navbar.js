import navbar from '../../styles/navbar.module.scss'
import Link from 'next/link'
import dynamic from "next/dynamic"
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'

const LanguageSelect = dynamic(
  () => import('./languageSelect'),
  { ssr: false }
)

export default function Navbar() {
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
    <header className={navbar.container}>
      <input type="checkbox" id="nav-toggle" className={navbar.toggle}/>
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
                About Us
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
                <MenuItem onClick={handleAboutUsClose}>Constitution</MenuItem>
                <MenuItem onClick={handleAboutUsClose}>Partner</MenuItem>
                <MenuItem onClick={handleAboutUsClose}>Policies</MenuItem>
                <MenuItem onClick={handleAboutUsClose}>Procedures</MenuItem>
                <MenuItem onClick={handleAboutUsClose}>Structure</MenuItem>
                <MenuItem onClick={handleAboutUsClose}>Vorstand</MenuItem>
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
                Activities
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
                <MenuItem onClick={handleActivitiesClose}>Accommodation services</MenuItem>
                <MenuItem onClick={handleActivitiesClose}>Advice for Professionals</MenuItem>
                <MenuItem onClick={handleActivitiesClose}>Advice for Students</MenuItem>
                <MenuItem onClick={handleActivitiesClose}>Catering Services</MenuItem>
                <MenuItem onClick={handleActivitiesClose}>Children and Family Support</MenuItem>
                <MenuItem onClick={handleActivitiesClose}>CommUnity Events</MenuItem>
                <MenuItem onClick={handleActivitiesClose}>German classes</MenuItem>
                <MenuItem onClick={handleActivitiesClose}>Intake services</MenuItem>
                <MenuItem onClick={handleActivitiesClose}>Legal Advice</MenuItem>
                <MenuItem onClick={handleActivitiesClose}>Psychological Support</MenuItem>
                <MenuItem onClick={handleActivitiesClose}>Services for Hosts</MenuItem>
                <MenuItem onClick={handleActivitiesClose}>Training</MenuItem>
                <MenuItem onClick={handleActivitiesClose}>Volunteers</MenuItem>
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
                Locations
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
                <MenuItem onClick={handleLocationsClose}>Dammweg 216</MenuItem>
                <MenuItem onClick={handleLocationsClose}>Meeringdamm 20</MenuItem>
                <MenuItem onClick={handleLocationsClose}>Suggest new location</MenuItem>
              </Menu>
            </div>
          </li>
          <li>
            <Link href="/faq">
              <Button>FAQ</Button>
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
                Press
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
                <MenuItem onClick={handlePressClose}>press coverage</MenuItem>
                <MenuItem onClick={handlePressClose}>press contact</MenuItem>
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
                News
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
                <MenuItem onClick={handleNewsClose}>News</MenuItem>
                <MenuItem onClick={handleNewsClose}>signup for our Newsletter</MenuItem>
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
                Archive
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
                <MenuItem onClick={handleArchiveClose}>past events</MenuItem>
                <MenuItem onClick={handleArchiveClose}>pictures</MenuItem>
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
  )
}
