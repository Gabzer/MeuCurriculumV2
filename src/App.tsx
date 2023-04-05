import { useTranslation, Trans } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import { Header } from './app/header/Header';
import { Menu } from './app/menu/Menu';

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: 'center',
    backgroundColor: '#F1F4F5'
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
  <p>
    <Trans i18nKey='home.siting' />
  </p>
  {t('home.welcome')}
</body>
*/
