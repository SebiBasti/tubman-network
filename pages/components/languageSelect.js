import React, {useEffect} from "react"
import { useTranslation } from "next-i18next"
import i18next from "i18next"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Button from '@mui/material/Button'
import Popover from "@mui/material/Popover"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListSubheader from "@mui/material/ListSubheader"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import Link from "next/link"
import { useRouter } from "next/router"

const LanguageSelect = () => {
  const router = useRouter();

  const languageMap = {
    en: { label: "🇬🇧 English", dir: "ltr", active: true },
    de: { label: "🇩🇪 Deutsch", dir: "ltr", active: false },
    ua: { label: "🇺🇦 український", dir: "ltr", active: false },
    ru: { label: "🇷🇺 Русский", dir: "ltr", active: false },
    sw: { label: "kiswahili", dir: "ltr", active: false},
    fr: { label: "🇫🇷 Français", dir: "ltr", active: false},
    pt: { label: "🇵🇹 Portugais", dir: "ltr", active: false}
  };

  const selected = (typeof window !== 'undefined' && languageMap[localStorage.getItem("i18nextLng")]) ?
      localStorage.getItem("i18nextLng") :
      "en"

  const { t } = useTranslation('common')

  useEffect(() => {
    router.push(`/${selected}${router.pathname}`);
  },[])

  const [menuAnchor, setMenuAnchor] = React.useState(null);
  useEffect(() => {
    document.body.dir = languageMap[selected].dir;
  }, [menuAnchor, selected])

  return (
    <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center", height: "100%", width: "160px", marginLeft: "1rem"}}>
      <Button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
        {languageMap[selected].label}
        <ArrowDropDownIcon fontSize="small" />
      </Button>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <div>
          <List>
            <ListSubheader>{t("select_language")}</ListSubheader>
            {Object.keys(languageMap)?.map(item => (
              <ListItem
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                <Link
                  href={`${router.pathname}`}
                  locale={item}
                >
                  {languageMap[item].label}
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale),
  }
})

export default LanguageSelect
