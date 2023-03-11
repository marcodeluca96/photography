import './about.css';

const Aboutme = () => {
  return (
    <div className='aboutme__container'>
      <div className='aboutme__text-container'>
        <div className='aboutme__name'>Marco De Luca</div>
        <div className='aboutme__info'>
          Hi, I'm just a simple photography enthusiast. If you like my photos,
          or want to contact me, you can follow me on instagram through the
          button above.
        </div>
      </div>
      <div className='aboutme__image'></div>
    </div>
  );
};

export default Aboutme;
