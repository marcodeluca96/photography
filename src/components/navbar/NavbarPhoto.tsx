import './navbarPhoto.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavbarPhoto = () => {
  return (
    <motion.div
      className='navbar-photo__container'
      initial={{ opacity: 0, translateY: -200 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='navbar-photo__menu'>
        <CameraAltOutlinedIcon />
        <Link to={'/photography'} className='navbar-photo__title'>
          Marco De Luca
        </Link>
        <div className='navbar-photo__tabs'>
          <Link to='about' className='navbar-photo__tabs-item'>
            About
          </Link>
          {/* <Link to='contact' className='navbar-photo__tabs-item'>
            Contact
          </Link> */}
        </div>
      </div>
      <div className='navbar-photo__right'>
        <div className='navbar-photo__right-item'>
          {/* <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
            <path
              d='M 4 8.667 C 4 6.089 6.089 4 8.667 4 L 15.333 4 C 17.911 4 20 6.089 20 8.667 L 20 15.333 C 20 17.911 17.911 20 15.333 20 L 8.667 20 C 6.089 20 4 17.911 4 15.333 Z M 15.333 7.333 C 15.322 7.817 15.574 8.268 15.991 8.513 C 16.408 8.758 16.924 8.758 17.341 8.513 C 17.758 8.269 18.01 7.817 17.999 7.334 C 17.983 6.609 17.391 6.03 16.667 6.03 C 15.942 6.03 15.35 6.609 15.333 7.333 Z M 8.667 12 C 8.667 13.841 10.16 15.334 12.001 15.333 C 13.842 15.333 15.334 13.84 15.334 11.999 C 15.334 10.158 13.841 8.666 12 8.666 C 10.159 8.666 8.666 10.159 8.667 12 Z'
              fill='rgb(0,0,0)'
            ></path>
          </svg> */}
          <Link
            to='https://www.instagram.com/marcodeluca.96/'
            target={'_blank'}
            style={{ textDecoration: 'none', color: '#000000' }}
          >
            <InstagramIcon />
          </Link>
        </div>
        {/* <div className='navbar-photo__right-item'>a</div> */}
      </div>
    </motion.div>
  );
};

export default NavbarPhoto;
