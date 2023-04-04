import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
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
      role='tabpanel'
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
    display: 'flex',
    justifyContent: 'center',
  }
}));

interface MenuStyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const MenuStyledTabs = styled((props: MenuStyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#3A4250',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

interface MenuStyledTabProps {
  label: string;
}

const MenuStyledTab = styled((props: MenuStyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  letterSpacing: theme.typography.pxToRem(3),
  marginRight: theme.spacing(6),
  marginLeft: theme.spacing(6),
  color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
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
        <Box className={classes.menu}>
          <MenuStyledTabs value={value} onChange={handleChange}>
            <MenuStyledTab label='Home' {...a11yProps(0)} />
            <MenuStyledTab label='Curriculum Vitae' {...a11yProps(1)} />
            <MenuStyledTab label={t('website.contact')} {...a11yProps(2)} />
          </MenuStyledTabs>
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
