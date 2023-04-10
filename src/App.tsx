import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import { Header } from './app/structurePages/Header';
import { Menu } from './app/structurePages/Menu';

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