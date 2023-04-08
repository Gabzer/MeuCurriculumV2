import { Trans } from 'react-i18next';

import { makeStyles } from '@material-ui/core';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    listItemText: {
        textAlign: 'justify'
    }
}));

export const ExperienceSection = () => {
    const classes = useStyles();
    
    return (
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
}