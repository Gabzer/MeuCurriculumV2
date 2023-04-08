import { Trans, useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core';

import { Content } from '../components/Content';

const useStyles = makeStyles((theme) => ({
    p: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'justify',
        lineHeight: '30px',
        letterSpacing: '1px',
        wordSpacing: '4px',
    },
}));

export const HomePage = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const homeHeadContent = (
        <>
            <i><Trans i18nKey='home.siting' /></i><br />
            <strong>Steve Jobs</strong>
        </>
    );

    return (
        <Content headContent={homeHeadContent} mainContentTitle={<h2>{t('home.welcome')}</h2>} mainContent={<p className={classes.p}>{t('home.parag1')}</p>} footer={true}/>
    );
}