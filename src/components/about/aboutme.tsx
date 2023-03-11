import { motion } from 'framer-motion';
import './about.css';

const Aboutme = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className='aboutme__container'
    >
      <div className='aboutme__text-container'>
        <div className='aboutme__name'>Marco De Luca</div>
        <div className='aboutme__info'>
          Hi, I'm just a simple photography enthusiast. If you like my photos,
          or want to contact me, you can follow me on instagram through the
          button above.
        </div>
      </div>
      <div className='aboutme__image'></div>
    </motion.div>
  );
};

export default Aboutme;
