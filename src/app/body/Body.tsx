import { Trans, useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@mui/material';
import { Content } from '../components/Content';
import { CurriculumPage } from '../components/CurriculumPage';

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

interface IBody {
    page: number;
}

export const Body = (props: IBody) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const homeHeadContent = (
        <>
            <i><Trans i18nKey='home.siting' /></i><br />
            <strong>Steve Jobs</strong>
        </>
    );

    return (
        <Container maxWidth='lg' className={classes.bodyPainel}>
            {props.page === 0 ? <Content headContent={homeHeadContent} mainContentTitle={<h2>{t('home.welcome')}</h2>} mainContent={<p className={classes.p}>{t('home.parag1')}</p>} footer={true}/> : null}
            {props.page === 1 ? <CurriculumPage /> : null}
            {props.page === 2 ? <Content headContent={t('website.contact')} mainContent={<h2>{t('home.welcome')}</h2>} footer={true}/> : null}
        </Container>
    );
}