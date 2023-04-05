import { Trans, useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    bodyPainel: {
        textAlign: 'center',
        border: '10'
    },
    p: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'justify',
        lineHeight: '30px',
        letterSpacing: '1px',
        wordSpacing: '4px',
    },
    hr: {
        borderTop: '1px solid #f5f5f5'
    },
}));
/*
export const homeContent = {
    const classes = useStyles();
    homeHeadContent: (
        <>
            <i><Trans i18nKey='home.siting' /></i><br />
            <strong>Steve Jobs</strong>
        </>
    ),
    homeMainContent: (
        <>
            <h2>{useTranslation().t('home.welcome')}</h2>
            <hr id='hr1' className={useStyles().classes.hr} />
            <hr id='hr2' className={classes.hr} />
            <p className={classes.p}>{t('home.parag1')}</p>
            <hr id='hr3' className={classes.hr} />
            <hr id='hr4' className={classes.hr} />
        </>
    )
}
*/