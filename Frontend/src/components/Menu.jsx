import React from 'react'
import {data} from '../restApi.json'

const Menu = () => {
  return (
        <section className='menu' id='menu'>
            <div className="container">
                <div className="heading_section">
                    <h1 className='heading'>OUR POPULAR DISHES</h1>
                    <p>These are the fan favorites for a reason! From our kitchen to your table, experience the dishes that have earned their place as our most loved</p>
                </div>
                <div className="dishes_container">
                    {
                        data[0].dishes.map(Element=>{
                            return(
                                <div className="card" key={Element.id}>
                                    <img src={Element.image} alt={Element.title}/>
                                    <h3>{Element.title}</h3>
                                    <button>{Element.category}</button>
                                </div>
                            )
                        })
                    };
                </div>
            </div>
        </section>
  )
}

export  default Menu;