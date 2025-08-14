import React, { useEffect, useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Success = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the message to display based on the navigation state
  const message = location.state?.messageType === 'customMenu'
    ? 'Customized Menu Submitted!'
    : 'Successfully Reserved!';

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount === 1) {
          clearInterval(timeoutId);
          navigate('/');
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <>
      <section className='notFound'>
        <div className="container">
          <img src='/sandwich.png' alt='success' />
          {/* Display the dynamic message here */}
          <h1>{message}</h1>
          <h1>Redirecting to Home in {countdown} seconds...</h1>
          <Link to={'/'}>
            Back To Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Success;
