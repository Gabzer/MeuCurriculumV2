import { Trans } from 'react-i18next';

import { makeStyles } from '@material-ui/core';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    listItemText: {
        textAlign: 'justify'
    }
}));

export const LanguageSection = () => {
    const classes = useStyles();
    
    return (
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
}