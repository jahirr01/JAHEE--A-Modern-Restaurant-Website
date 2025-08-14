import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { data } from '../restApi.json';

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className='logo'>JAHEE</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className='links'>
          {
            data[0].navbarLinks.map((Element) => {
              return (
                <Link to={Element.link} key={Element.id} spy={true} smooth={true} duration={500}>
                  {Element.title}
                </Link>
              );
            })
          }
        </div>
        {/* The 'OUR MENU' button is now a Link that scrolls to the new form section */}
        <Link
          className="menuBtn"
          to="customize-menu-form" // This ID must match the ID of your new form component
          spy={true}
          smooth={true}
          duration={500}
        >
          CUSTOMIZE MENU
        </Link>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;