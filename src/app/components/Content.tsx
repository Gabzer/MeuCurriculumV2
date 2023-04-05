import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, styled } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        backgroundColor: 'white',
    },
    bodyBox: {
        width: '97%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '30px',
        marginBottom: '30px',
        font: '1em Georgia, serif',
    },
    p: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'justify',
        lineHeight: '30px',
        letterSpacing: '1px',
        wordSpacing: '4px',
    },
    hr: {
        borderTop: '1px solid #f5f5f5'
    },
}));

const HeaderBodyItem = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
    backgroundColor: '#3A4250',
    color: 'white',
    font: '1.2em Georgia, serif',
    letterSpacing: '2px',
    wordSpacing: '4px',
    lineHeight: '30px',
    textShadow: '2px 2px 4px #000000'
}));

const FooterBodyItem = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
    backgroundColor: '#3A4250',
}));

interface IContent {
    headContent: React.ReactNode;
    mainContentTitle?: React.ReactNode;
    mainContent: React.ReactNode;
    footer: boolean;
}

export const Content = (props: IContent) => {
    const classes = useStyles();
    return (
        <Box className={classes.mainBox}>
            <HeaderBodyItem key={'header_body_item'} elevation={3} square>
                {props.headContent}
            </HeaderBodyItem>

            <Box className={classes.bodyBox}>
                {props.mainContentTitle && props.mainContentTitle}
                <hr className={classes.hr} />
                <hr className={classes.hr} />
                {props.mainContent}
                <hr className={classes.hr} />
                <hr className={classes.hr} />
            </Box>

            {props.footer && <FooterBodyItem square />}
        </Box>
    );
}