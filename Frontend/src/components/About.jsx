import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>A symphony of flavors, crafted with passion. Our kitchen, your unforgettable memory</p>
                </div>
                <p className="mid">
                    Welcome to JAHEE, where every meal tells a story. Our restaurant is more than just a dining destination; it is a haven for food lovers, a place where the passion for culinary excellence is perfectly balanced with a warm, inviting atmosphere. Our journey began with a simple, heartfelt idea: to create a space where classic, time-honored recipes could be lovingly reimagined with a modern twist. We are committed to using only the freshest, locally-sourced ingredients, carefully selected from trusted farmers and artisans who share our dedication to quality and sustainability. We believe that great food is an art form, and our dedicated team of chefs works tirelessly to craft a menu that is both wonderfully familiar and excitingly new, ensuring that each dish is a masterpiece of flavor and presentation.
                </p>
                {/* <Link to={'/'}>Explore Menu{onclick=<menu/>}
                <span>
                    <HiOutlineArrowNarrowRight/>
                </span>
                </Link>*/}
            </div>
            <div className="banner">
                <img src='/hero22.jpg'alt='about'></img>
            </div>
        </div>
      
    </section>
  )
}

export default About
