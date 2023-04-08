import { Trans, useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

import { Content } from '../components/Content';

const useStyles = makeStyles((theme) => ({
    content: {
        textAlign: 'left',
        lineHeight: '50px',
        letterSpacing: '1px',
        wordSpacing: '4px',
        font: '1.2em Georgia, serif',
        backgroundColor: 'white',
    },
    h3: {
        margin: '0px'
    },
    hr: {
        borderTop: '1px solid #f5f5f5'
    },
    listItemText: {
        textAlign: 'justify'
    }
}));

export const CurriculumPage = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    const content1 = (
        <List sx={{ width: '100%', maxWidth: '99%', bgcolor: 'background.paper' }}>
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='Levio Advices' src='../assets/desjardins.png' sx={{ width: 56, height: 56 }} />
                </ListItemAvatar>
                <ListItemText primary={<Trans i18nKey='cv.content1.desjardins._1' />}
                              className={classes.listItemText}
                              secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content1.fonction' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content1.desjardins._2' />
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content1.period' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content1.desjardins._3' />
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content1.assignments' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content1.desjardins._4' />
                                </>
                              }
                />
            </ListItem>
            <Divider variant='inset' component='li' />

            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='Levio Advices' src='../assets/levio.png' sx={{ width: 56, height: 56 }} />
                </ListItemAvatar>
                <ListItemText primary={<Trans i18nKey='cv.content1.levio._1' />}
                              className={classes.listItemText}
                              secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content1.fonction' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content1.levio._2' />
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content1.period' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content1.levio._3' />
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content1.assignments' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content1.levio._4' />
                                </>
                              }
                />
            </ListItem>
            <Divider variant='inset' component='li' />

            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='Indra Company' src='../assets/indra.png' sx={{ width: 56, height: 56 }} />
                </ListItemAvatar>
                <ListItemText primary={<Trans i18nKey='cv.content1.indra._1' />}
                              className={classes.listItemText}
                              secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content1.fonction' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content1.indra._2' />
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content1.period' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content1.indra._3' />
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content1.assignments' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content1.indra._4' />
                                </>
                              }
                />
            </ListItem>
        </List>
    );

    const content2 = (
        <List sx={{ width: '100%', maxWidth: '99%', bgcolor: 'background.paper' }}>
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='Senai' src='../assets/igti.png' sx={{ width: 56, height: 56 }} />
                </ListItemAvatar>
                <ListItemText primary={<Trans i18nKey='cv.content2.igti._1' />}
                              className={classes.listItemText}
                              secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content2.institution' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content2.igti._2' />
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content2.status' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content2.igti._3' />
                                </>
                              }
                />
            </ListItem>
            <Divider variant='inset' component='li' />

            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='Senac' src='../assets/senac.png' sx={{ width: 56, height: 56 }} />
                </ListItemAvatar>
                <ListItemText primary={<Trans i18nKey='cv.content2.senac._1' />}
                              className={classes.listItemText}
                              secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content2.institution' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content2.senac._2' />
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content2.status' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content2.senac._3' />
                                </>
                              }
                />
            </ListItem>
            <Divider variant='inset' component='li' />

            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='Studium Notre-Dame de Vie' src='../assets/studium.png' sx={{ width: 56, height: 56 }} />
                </ListItemAvatar>
                <ListItemText primary={<Trans i18nKey='cv.content2.sophia._1' />}
                              className={classes.listItemText}
                              secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content2.institution' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content2.sophia._2' />
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content2.status' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content2.sophia._3' />
                                </>
                              }
                />
            </ListItem>
            <Divider variant='inset' component='li' />

            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='Senai' src='../assets/senai.png' sx={{ width: 56, height: 56 }} />
                </ListItemAvatar>
                <ListItemText primary={<Trans i18nKey='cv.content2.senai._1' />}
                              className={classes.listItemText}
                              secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content2.institution' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content2.senai._2' />
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content2.status' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content2.senai._3' />
                                </>
                              }
                />
            </ListItem>
        </List>
    );

    const content3 = (
        <List sx={{ width: '100%', maxWidth: '99%', bgcolor: 'background.paper' }}>
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='French' src='../assets/France.png' />
                </ListItemAvatar>
                <ListItemText primary={<Trans i18nKey='cv.content3.fr._1' />}
                              className={classes.listItemText}
                              secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content3.level' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content3.fr._2' />
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content3.certification' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content3.fr._3' />
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content3.timeCountry' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content3.fr._4' />
                                </>
                              }
                />
            </ListItem>
            <Divider variant='inset' component='li' />

            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='English' src='../assets/United-States.png' />
                </ListItemAvatar>
                <ListItemText primary={<Trans i18nKey='cv.content3.en._1' />}
                              className={classes.listItemText}
                              secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content3.level' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content3.en._2' />
                                </>
                              }
                />
            </ListItem>
            <Divider variant='inset' component='li' />

            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='Italien' src='../assets/Italy.png' />
                </ListItemAvatar>
                <ListItemText primary={<Trans i18nKey='cv.content3.it._1' />}
                            className={classes.listItemText}
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content3.level' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content3.it._2' />
                                </>
                            }
                />
            </ListItem>
            <Divider variant='inset' component='li' />

            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt='Portuguese' src='../assets/Brazil.png' />
                </ListItemAvatar>
                <ListItemText primary={<Trans i18nKey='cv.content3.pt._1' />}
                            className={classes.listItemText}
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content3.level' />  — 
                                    </Typography>
                                    <Trans i18nKey='cv.content3.pt._2' />
                                </>
                            }
                />
            </ListItem>
        </List>
    );

    const content4 = (
        <List sx={{ width: '100%', maxWidth: '99%', bgcolor: 'background.paper' }}>
            <ListItem alignItems='flex-start'>
                <ListItemText primary={<Trans i18nKey='cv.content4.certification' />}
                              className={classes.listItemText}
                              secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content4._1' />
                                    </Typography>
                                </>
                              }
                />
            </ListItem>
            <Divider variant='inset' component='li' />
            
            <ListItem alignItems='flex-start'>
                <ListItemText primary={<Trans i18nKey='cv.content4.devLanguages' />}
                              className={classes.listItemText}
                              secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content4._2' />
                                    </Typography>
                                </>
                              }
                />
            </ListItem>
            <Divider variant='inset' component='li' />
            
            <ListItem alignItems='flex-start'>
                <ListItemText primary={<Trans i18nKey='cv.content4.architectures' />}
                              className={classes.listItemText}
                              secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component='span'
                                        variant='body2'
                                        color='text.primary'
                                    >
                                        <Trans i18nKey='cv.content4._3' />
                                    </Typography>
                                </>
                              }
                />
            </ListItem>
        </List>
    );

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
            <Content headContent={t('cv.content1.title1')} mainContent={content1} footer={false}/>
            <Content headContent={t('cv.content2.title2')} mainContent={content2} footer={false}/>
            <Content headContent={t('cv.content3.title3')} mainContent={content3} footer={false}/>
            <Content headContent={t('cv.content4.title4')} mainContent={content4} footer={false}/>
            <Content headContent={t('cv.content5.title5')} mainContent={content5} footer={true}/>
        </Box>
    );
}