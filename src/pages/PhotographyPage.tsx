import './photographyPage.css';
import { motion } from 'framer-motion';
import NavbarPhoto from '../components/navbar/NavbarPhoto';
import FooterPhoto from '../components/footer/FooterPhoto';

const PhotographyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='photography-page'
    >
      <NavbarPhoto />

      <FooterPhoto />
    </motion.div>
  );
};

export default PhotographyPage;
