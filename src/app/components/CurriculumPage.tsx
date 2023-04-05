import { Trans, useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { Content } from './Content';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    content: {
        textAlign: 'left',
        lineHeight: '50px',
        letterSpacing: '1px',
        wordSpacing: '4px',
        font: '1.2em Georgia, serif',
    },
    h3: {
        margin: '0px'
    },
    hr: {
        borderTop: '1px solid #f5f5f5'
    },
}));

export const CurriculumPage = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    const content1 = (
        <>
            <h3 className={classes.h3}><Trans i18nKey='cv.content1._1' /></h3>
            <Trans i18nKey='cv.content1._2' />
            <hr />
        </>
    );

    return (
        <Box className={classes.content}>
            <Content headContent={t('cv.title1')} mainContent={content1} footer={false}/>
            <Content headContent={'test'} mainContent={'test'} footer={false}/>
            <Content headContent={'test'} mainContent={'test'} footer={false}/>
            <Content headContent={'test'} mainContent={'test'} footer={false}/>
            <Content headContent={'test'} mainContent={'test'} footer={true}/>
        </Box>
    );
}