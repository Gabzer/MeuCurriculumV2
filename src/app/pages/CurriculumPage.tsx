import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/material';

import { Content } from '../components/Content';
import { ExperienceSection } from '../sections/ExperienceSection';
import { FormationSection } from '../sections/FormationSection';
import { LanguageSection } from '../sections/LanguageSection';
import { OtherSection } from '../sections/OtherSection';
import { ProjectsSection } from '../sections/ProjectsSection';

const useStyles = makeStyles((theme) => ({
    content: {
        textAlign: 'left',
        lineHeight: '50px',
        letterSpacing: '1px',
        wordSpacing: '4px',
        font: '1.2em Georgia, serif',
        backgroundColor: 'white',
    },
}));

export const CurriculumPage = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Box className={classes.content}>
            <Content headContent={t('cv.content1.title1')} mainContent={<ExperienceSection />} footer={false}/>
            <Content headContent={t('cv.content2.title2')} mainContent={<FormationSection />} footer={false}/>
            <Content headContent={t('cv.content3.title3')} mainContent={<LanguageSection />} footer={false}/>
            <Content headContent={t('cv.content4.title4')} mainContent={<OtherSection />} footer={false}/>
            <Content headContent={t('cv.content5.title5')} mainContent={<ProjectsSection />} footer={true}/>
        </Box>
    );
}