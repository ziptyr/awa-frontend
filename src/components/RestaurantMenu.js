import { React } from 'react'
import { useParams } from 'react-router'


export const RestaurantMenu = ({menuData, updatedRestaurants}) => {
    const index = useParams();  

    const restaurant = updatedRestaurants.find(restaurant => restaurant.id === index.id );
    if ( restaurant == null) {
        return <div>No matching restaurant</div>
    }

    
    const specificMenu = menuData.filter(menu => 
        menu.restaurant === restaurant.name
    )
    
    console.log(restaurant);
    console.log(specificMenu);

    
    return (
        <div >
            <h1>{restaurant.name} </h1> 
                {specificMenu.map((data, key) => {
                    return (
                        <div key={data.id}>
                            <div>
                                {data.name} 
                            </div>
                            <div>
                                {data.price}$
                            </div>
                        </div>
                )})}
        </div>
    )
}
