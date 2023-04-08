import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@mui/material';

import { Content } from '../components/Content';
import { CurriculumPage } from '../pages/CurriculumPage';
import { HomePage } from '../pages/HomePage';

const useStyles = makeStyles((theme) => ({
    bodyPainel: {
        textAlign: 'center',
        border: '10'
    },
}));

interface IBody {
    page: number;
}

export const Body = (props: IBody) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Container maxWidth='lg' className={classes.bodyPainel}>
            {props.page === 0 ? <HomePage /> : null}
            {props.page === 1 ? <CurriculumPage /> : null}
            {props.page === 2 ? <Content headContent={t('website.contact')} mainContent={<h2>{t('home.welcome')}</h2>} footer={true}/> : null}
        </Container>
    );
}