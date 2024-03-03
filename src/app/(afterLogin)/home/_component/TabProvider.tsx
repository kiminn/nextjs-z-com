'use client';

import { ReactNode, createContext, useState } from 'react';

export const TabContext = createContext({
    tab: 'rec',
    // value: 기본값 (value: string)
    setTab: (value: 'rec' | 'fol') => {},
});

type Props = {children: ReactNode}

export default function TabProvider({children}:Props) {
    const [tab, setTab] = useState('rec');

    return (
        <TabContext.Provider value={{tab, setTab}}>
            {children}
        </TabContext.Provider>
    )
}
