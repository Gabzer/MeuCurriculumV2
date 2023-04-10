import { makeStyles } from '@material-ui/core';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

const useStyles = makeStyles(() => ({
    url: {
        color: 'black',
        textDecoration: 'none',
    },
    txt: {
        marginTop: 'auto',
        marginBottom: 'auto',
    }
}));

interface IContactItem {
    imgName: string;
    txt: string;
    last?: boolean;
    url?: string;
}

export const ContactItem = (props: IContactItem) => {
    const classes = useStyles();
    const primaryContent = props.url 
        ? <a href={props.url} target='_blank' className={classes.url}>{props.txt}</a>
        : props.txt;

    return (
        <List sx={{ width: '100%', maxWidth: '99%', bgcolor: 'background.paper' }}>
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt={props.imgName} src={`../assets/${props.imgName}.png`} />
                </ListItemAvatar>
                <ListItemText primary={primaryContent} className={classes.txt} />
            </ListItem>
            {!props.last && <Divider variant='inset' component='li' />}
        </List>
    );
}