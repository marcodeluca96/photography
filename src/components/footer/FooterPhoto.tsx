import './footerPhoto.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const FooterPhoto = () => {
  return (
    <div className='footer-photo__container'>
      <div className='footer-photo__menu'>
        {/* <div className='footer-photo__title'>Marco De Luca</div> */}
        <div className='footer-photo__tabs'>
          <div className='footer-photo__tabs-item'>
            &#169; 2023
            <br />
            Marco De Luca
          </div>
        </div>
      </div>
      <div className='footer-photo__right'>
        <div className='footer-photo__right-item'>
          <Link
            to='https://www.instagram.com/marcodeluca.96/'
            target={'_blank'}
            style={{ textDecoration: 'none', color: '#000000' }}
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterPhoto;
