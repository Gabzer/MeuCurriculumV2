import { useTranslation, Trans } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import { Header } from './app/header/Header';
import { Menu } from './app/menu/Menu';

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: 'center'
  }
}));

function App() {
  const classes = useStyles();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    return i18n.changeLanguage(lng);
  };

  return (
    <div className={classes.app}>
      <Header changeLanguage={changeLanguage} />

      <Menu />
    </div>
  );
}

export default App;
/*
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
      </body>*/
