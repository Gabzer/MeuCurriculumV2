import React from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

const useStyles = makeStyles((theme) => ({
    menu: {
        backgroundColor: '#3A4250',
        display: 'flex',
        justifyContent: 'center',
    }
}));

interface MenuStyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
  
const MenuStyledTabs = styled((props: MenuStyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#3A4250',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
});

interface MenuStyledTabProps {
    label: string;
}

const MenuStyledTab = styled((props: MenuStyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    letterSpacing: theme.typography.pxToRem(3),
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(6),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
        color: '#fff',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}));

function setTabProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

interface MenuTabsProps {
    handleChangeTab: any;
    tabValue: number;
}

export const MenuTabs = (props: MenuTabsProps) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Box className={classes.menu}>
            <MenuStyledTabs value={props.tabValue} onChange={props.handleChangeTab}>
                <MenuStyledTab label='Home' {...setTabProps(0)} />
                <MenuStyledTab label='Curriculum Vitae' {...setTabProps(1)} />
                <MenuStyledTab label={t('website.contact')} {...setTabProps(2)} />
            </MenuStyledTabs>
        </Box>
    );
}