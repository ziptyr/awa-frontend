import React from 'react';
import Restaurants from './Restaurants';
import Menu from './Menu';
import {useStates} from './StatesProvider';

export default function Main() {
    const {mainPage, isMainPageRestaurants, isMainPageMenu, setMainPageMenu} = useStates();

    return (
        <main>
            {(isMainPageRestaurants()) ? <Restaurants /> : null}
            {(isMainPageMenu()) ? <Menu /> : null}
        </main>
    )
}
