import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";

const LanguageSelect = () => {
  const languageMap = {
    de: { label: "🇩🇪 Deutsch", dir: "ltr", active: true},
    en: { label: "🇬🇧 English", dir: "ltr", active: false },
    ua: { label: "🇺🇦 український", dir: "ltr", active: false },
    ru: { label: "🇷🇺 Русский", dir: "ltr", active: false },
    sw: { label: "kiswahili", dir: "ltr", active: false},
    fr: { label: "🇫🇷 Français", dir: "ltr", active: false},
    pt: { label: "🇵🇹 Portugais", dir: "ltr", active: false}
  };

  const selected = (typeof window !== 'undefined' && languageMap[localStorage.getItem("i18nextLng")]) ?
      localStorage.getItem("i18nextLng") :
      "en"

  const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = React.useState(null);
  React.useEffect(() => {
    document.body.dir = languageMap[selected].dir;
  }, [menuAnchor, selected]);

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
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                {languageMap[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

export default LanguageSelect;
