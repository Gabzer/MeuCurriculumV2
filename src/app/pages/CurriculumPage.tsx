import { Trans, useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

import { Content } from '../components/Content';
import { ExperienceSection } from '../components/ExperienceSection';
import { FormationSection } from '../components/FormationSection';
import { LanguageSection } from '../components/LanguageSection';
import { OtherSection } from '../components/OtherSection';

const useStyles = makeStyles((theme) => ({
    content: {
        textAlign: 'left',
        lineHeight: '50px',
        letterSpacing: '1px',
        wordSpacing: '4px',
        font: '1.2em Georgia, serif',
        backgroundColor: 'white',
    },
    listItemText: {
        textAlign: 'justify'
    }
}));

export const CurriculumPage = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    const content5 = (
        <List sx={{ width: '100%', maxWidth: '99%', bgcolor: 'background.paper' }}>
            <ListItem alignItems='flex-start'>
                <ListItemText primary={<Trans i18nKey='cv.content5.secondaryTitle' />}
                              className={classes.listItemText}
                              secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content5.achievements' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content5._1' />
                                </>
                              }
                />
            </ListItem>
        </List>
    );

    return (
        <Box className={classes.content}>
            <Content headContent={t('cv.content1.title1')} mainContent={<ExperienceSection />} footer={false}/>
            <Content headContent={t('cv.content2.title2')} mainContent={<FormationSection />} footer={false}/>
            <Content headContent={t('cv.content3.title3')} mainContent={<LanguageSection />} footer={false}/>
            <Content headContent={t('cv.content4.title4')} mainContent={<OtherSection />} footer={false}/>
            <Content headContent={t('cv.content5.title5')} mainContent={content5} footer={true}/>
        </Box>
    );
}