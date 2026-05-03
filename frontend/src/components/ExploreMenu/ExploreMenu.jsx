import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({ category, setCategory }) => {

  const { menu_list } = useContext(StoreContext);

  // 🔥 Dummy Menu Data (fallback)
  const dummyMenu = [
    {
      menu_name: "Fast Food",
      menu_image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
      menu_name: "Italian",
      menu_image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
    },
    {
      menu_name: "Desserts",
      menu_image: "https://images.unsplash.com/photo-1551024506-0bccd828d307"
    }
  ];

  // 🔥 Use backend if available else dummy
  const dataToShow = menu_list && menu_list.length > 0 ? menu_list : dummyMenu;

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes.
        Our mission is to satisfy your cravings and elevate your dining experience.
      </p>

      <div className="explore-menu-list">
        {dataToShow.map((item, index) => {
          return (
            <div
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
              key={index}
              className='explore-menu-list-item'
            >
              <img
                src={item.menu_image}
                className={category === item.menu_name ? "active" : ""}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>

      <hr />
    </div>
  )
}

export default ExploreMenu