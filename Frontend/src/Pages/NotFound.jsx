import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const NotFound = () => {
  return (
    <>
     <section className='notFound'>
      <div className="container">
        
          <img src='/notFound.svg' alt='notFound'></img>
          <h1>Looks Like You're Lost</h1>
          <p>We cant seem to find you the page you're looking for</p>
          <Link to={'/'}>Back to Home<span>
            <HiOutlineArrowNarrowRight/>
            </span></Link>
        
      </div>

     </section>
    </>
  );
};

export default NotFound
