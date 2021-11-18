import React from 'react';
import {useStates} from './StatesProvider';

export default function Menu() {
    const {activeRestaurant} = useStates();

    return (
        <div>
            Menu - {activeRestaurant}
        </div>
    )
}
