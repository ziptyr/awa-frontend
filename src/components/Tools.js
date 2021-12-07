import React from 'react';
import { useParams } from 'react-router';


function GetRestaurant(restaurants) {

    //Finding the correct restaurant to display using useParams().
    const index = useParams();

    const restaurant = restaurants.find(restaurant => restaurant.id === index.id );
    if ( restaurant == null) {
        return <div>No matching restaurant</div>
    }

    return (restaurant)
}

function GetMenu(menuData, restaurant) {

    //Filtering the correct menu to display using the above function result.
    const menu = menuData.filter(menu =>
        menu.restaurant === restaurant.name
    )

    return (menu)
}

function GetProduct(menuData) {

    //Finding the correct product to display using useParams().
    const index = useParams();

    const product = menuData.find(product => product.id === index.productId );
    if ( product == null) {
        return <div>No matching product</div>
    }

    return (product)
}


export {GetRestaurant, GetMenu, GetProduct};
