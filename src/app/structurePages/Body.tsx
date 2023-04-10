import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@mui/material';

import { CurriculumPage } from '../pages/CurriculumPage';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';

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

    return (
        <Container maxWidth='lg' className={classes.bodyPainel}>
            {props.page === 0 ? <HomePage /> : null}
            {props.page === 1 ? <CurriculumPage /> : null}
            {props.page === 2 ? <ContactPage /> : null}
        </Container>
    );
}