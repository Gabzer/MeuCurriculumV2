import React from 'react';

import { Body } from '../body/Body';
import { BodyTabPainel } from '../components/BodyTabPanel';
import { MenuTabs } from '../components/MenuTabs';

export const Menu = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <body>
            <MenuTabs handleChangeTab={handleChange} tabValue={value} />
            <BodyTabPainel value={value} index={0}>
                <Body page={0} />
            </BodyTabPainel>
            <BodyTabPainel value={value} index={1}>
                Item Two
            </BodyTabPainel>
            <BodyTabPainel value={value} index={2}>
                Item Three
            </BodyTabPainel>
        </body>
    );
}