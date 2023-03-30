import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import './App.css';
import { Header } from './app/header/Header';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

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
    color: 'white',
    width: '100%',
  },
  tab: {
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
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
          <Tabs value={value} onChange={handleChange} className={classes.tab}>
            <Tab label='Home' {...a11yProps(0)} />
            <Tab label='Curriculum Vitae' {...a11yProps(1)} />
            <Tab label={t('website.contact')} {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>

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
