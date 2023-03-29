import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import './App.css';
import { Header } from './app/header/Header';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: 'center'
  },
  menu: {
    backgroundColor: '#3A4250',
    color: 'white'
  },
}));

function App() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const changeLanguage = (lng: any) => {
    return i18n.changeLanguage(lng);
  };

  return (
    <div className={classes.app}>
      <Header changeLanguage={changeLanguage} />

      <body>
        <Box className={classes.menu} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={() => handleChange} aria-label='basic tabs example'>
            <Tab label='Item One' {...a11yProps(0)} />
            <Tab label='Item Two' {...a11yProps(1)} />
            <Tab label='Item Three' {...a11yProps(2)} />
          </Tabs>
        </Box>

        <p>
          <Trans i18nKey='home.siting' />
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('home.welcome')}
        </a>
      </body>
    </div>
  );
}

export default App;
