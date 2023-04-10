import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core';
import { Box } from '@mui/material';

import { Content } from '../components/Content';
import { ContactItem } from '../components/ContactItem';

const useStyles = makeStyles((theme) => ({
    listItems: {
        textAlign: 'justify',
        width: '25%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

export const ContactPage = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    const content = (
        <Box className={classes.listItems}>
            <ContactItem imgName='gmail' txt='gab.zer.nas@gmail.com' url='mailto:gab.zer.nas@gmail.com' />
            <ContactItem imgName='linkedin' txt='gabriel-zerbine' url='https://www.linkedin.com/in/gabriel-zerbine-do-nascimento-49417b85/' />
            <ContactItem imgName='github' txt='gabzer' url='https://github.com/Gabzer' />
            <ContactItem imgName='telefone' txt='+1 (581) 748 - 5110' last={true} />
        </Box>
    );

    return (
        <Content headContent={t('contact.title')} mainContent={content} footer={true}/>
    );
}