import { Trans } from 'react-i18next';

import { makeStyles } from '@material-ui/core';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    listItemText: {
        textAlign: 'justify'
    }
}));

export const ProjectsSection = () => {
    const classes = useStyles();

    return (
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
}