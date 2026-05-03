import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext);

  // 🔥 Dummy Data (fallback)
  const dummyFood = [
    {
      _id: "1",
      name: "Burger",
      category: "Fast Food",
      description: "Tasty burger",
      price: 120,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
      _id: "2",
      name: "Pizza",
      category: "Fast Food",
      description: "Cheesy pizza",
      price: 250,
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
    },
    {
      _id: "3",
      name: "Pasta",
      category: "Italian",
      description: "Creamy pasta",
      price: 180,
      image: "https://images.unsplash.com/photo-1589308078056-fc4bffb75d1a"
    }
  ];

  // 🔥 Use backend data if available, else dummy
  const dataToShow = food_list && food_list.length > 0 ? food_list : dummyFood;

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {dataToShow.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id}
                image={item.image}
                name={item.name}
                desc={item.description}
                price={item.price}
                id={item._id}
              />
            )
          }
          return null;
        })}
      </div>
    </div>
  )
}

export default FoodDisplay