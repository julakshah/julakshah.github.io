"use client"

import React, { useState } from 'react';
import "./Portfolio.css";
import Menu from './Menu';

const Portfolio = () => {

  const [Items,setItems] = useState(Menu)

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updatedItems);
  }
  return (
    <section className='work container section' id='work'>
      <h2 className='section__title'>Portfolio</h2>
      <div className='work__filters'>
        <span className='work__item' onClick={() => setItems(Menu)}>Everthing</span>
        <span className='work__item' onClick={() => filterItem ("Robotics")}>Robotics</span>
        <span className='work__item' onClick={() => filterItem ("Software")}>Software</span>
        <span className='work__item' onClick={() => filterItem ("Integration")}>Integration</span>
      </div>

      <div className='work__container grid'>

      {Array.from(Items).reverse().map((elem) => {
        const{id,Image, title, category, link} = elem;
        return (
          <a href={link || '#'}
          className='work__card-link'
          key={id}
          >
            <div className='work__card'>
              <div className='work__thumbnail'>
                <img src={Image} alt="" className='work__img'/>
                <div className='work__mask'></div>
              </div>

              <span className='work__category'>{category}</span>
              <h3 className='work__title'>{title}</h3>
              <div className='work__button'></div>
            </div>
          </a>
        )
      })}

      </div>
    </section>
  )
}

export default Portfolio
