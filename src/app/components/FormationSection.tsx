import { Trans } from 'react-i18next';

import { makeStyles } from '@material-ui/core';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    listItemText: {
        textAlign: 'justify'
    }
}));

export const FormationSection = () => {
    const classes = useStyles();
    
    return (
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
}