import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { Box } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import './App.css';

const lngs: {[index: string]:any} = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'French' },
  pt: { nativeName: 'Portuguese' }
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const { t, i18n } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  /*
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={() => handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
  */
  return (
    <div className="App">
      <header className="App-header">
      <img src={''} className="App-logo" alt="logo" />
        <div>
          {Object.keys(lngs).map((lng: string) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </header>
      <body>
        <p>
          <Trans i18nKey="home.siting" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('home.welcome')}
        </a>
      </body>
    </div>
  );
}

export default App;
