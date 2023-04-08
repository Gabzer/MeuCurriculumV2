import { Trans } from 'react-i18next';

import { makeStyles } from '@material-ui/core';
import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    listItemText: {
        textAlign: 'justify'
    }
}));

export const OtherSection = () => {
    const classes = useStyles();

    return (
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
}