import { Trans, useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Paper, styled } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    bodyPainel: {
        textAlign: 'center',
        border: '10'
    },
    mainBox: {
        backgroundColor: 'white',
    },
    bodyBox: {
        width: '97%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '30px',
        marginBottom: '30px',
        font: '1em Georgia, serif',
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

const HeaderBodyItem = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
    backgroundColor: '#3A4250',
    color: 'white',
    font: '1.2em Georgia, serif',
    letterSpacing: '2px',
    wordSpacing: '4px',
    lineHeight: '30px',
    textShadow: '2px 2px 4px #000000'
}));

const FooterBodyItem = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
    backgroundColor: '#3A4250',
}));

interface IBody {
    page: number;
}

export const Body = (props: IBody) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Container maxWidth='lg' className={classes.bodyPainel}>
            <Box className={classes.mainBox}>
                <HeaderBodyItem key={'header_body_item'} elevation={3} square>
                    <i><Trans i18nKey='home.siting' /></i><br />
                    <strong>Steve Jobs</strong>
                </HeaderBodyItem>

                <Box className={classes.bodyBox}>
                    <h2>{t('home.welcome')}</h2>
                    <hr id='hr1' className={classes.hr} />
                    <hr id='hr2' className={classes.hr} />
                    <p className={classes.p}>{t('home.parag1')}</p>
                    <hr id='hr3' className={classes.hr} />
                    <hr id='hr4' className={classes.hr} />
                </Box>

                <FooterBodyItem square />
            </Box>
        </Container>
    );
}