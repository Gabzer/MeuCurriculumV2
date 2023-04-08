import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#8D5EC7',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)'
  },
  box: {
    padding: theme.spacing(2),
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  grid: {
    width: '100%',
    height: '30%',
    margin: '0px'
  },
  img: {
    marginLeft: 'auto',
    boxShadow: '0 4px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 40px 0 rgba(0, 0, 0, 0.19)'
  },
  imgGrid: {
    padding: theme.spacing(2)
  },
  titleGrid: {
    textAlign: 'center',
    color: 'white',
    textShadow: '2px 2px 4px #000000',
    font: 'Georgia'
  },
  mainTitle: {
    fontSize: 'bold 12px Georgia, serif',
    wordSpacing: '10px',
    letterSpacing: '10px'
  },
  secondaryTitle: {
    fontSize: '18px',
    letterSpacing: '5px'
  },
  p: {
    fontSize: '12px',
    color: 'white',
    textShadow: '2px 2px 4px #000000'
  },
  flags: {
    textAlign: 'left',
    height: '10px'
  },
  imgFlags: {
    height: '25px',
  }
}));

const lngs: {[index: string]:any} = {
  en: { nativeName: 'English', path: '../assets/United-States.png' },
  fr: { nativeName: 'French', path: '../assets/France.png' },
  pt: { nativeName: 'Portuguese', path: '../assets/Brazil.png' }
};

interface IHeader {
    changeLanguage: (lng: any) => any;
}

export const Header = (props: IHeader) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <header className={classes.header}>
            <Box className={classes.box}>
                <Grid container spacing={0} className={classes.grid}>
                    <Grid item xs={12} md={3} className={classes.imgGrid}>
                        <Avatar className={classes.img} src={'../assets/gab.jpg'} alt='Gabriel Zerbine photo' sx={{ width: 120, height: 120 }} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Grid item direction='column' className={classes.titleGrid}>
                            <Grid item className={classes.mainTitle} sx={{ height: 40 }}>
                                <h2>Gabriel Zerbine</h2>
                            </Grid>
                            <Grid item className={classes.secondaryTitle}>
                                <h3>{t('website.title')}</h3>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={3} className={classes.flags}>
                        {Object.keys(lngs).map((lng: string) => (
                            <IconButton size='small' key={lng} type='submit' onClick={() => props.changeLanguage(lng)}>
                                <img src={lngs[lng].path} alt={lngs[lng].nativeName} className={classes.imgFlags} />
                            </IconButton>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </header>
    );
}