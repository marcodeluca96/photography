import { useState } from 'react';
import PhotoAlbum, { RenderContainer, RenderPhoto } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import { photos } from '../../data/photos';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';

const renderContainer: RenderContainer = ({
  containerProps,
  children,
  containerRef,
}) => (
  <div
    style={{
      padding: '20px',
    }}
  >
    <div ref={containerRef} {...containerProps}>
      {children}
    </div>
  </div>
);

const renderPhoto: RenderPhoto = ({
  layout,
  layoutOptions,
  imageProps: { alt, style, ...restImageProps },
}) => (
  <motion.div
    whileHover={{ scale: 1.03, opacity: 0.8 }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    style={{
      boxSizing: 'content-box',
      alignItems: 'center',
      width: style?.width,
      padding: `${layoutOptions.padding - 2}px`,
      paddingBottom: 0,
    }}
  >
    <img
      alt={alt}
      style={{ ...style, width: '100%', padding: 0 }}
      {...restImageProps}
    />
    {/* <div
      style={{
        paddingTop: '8px',
        paddingBottom: '8px',
        overflow: 'visible',
        whiteSpace: 'nowrap',
        textAlign: 'center',
      }}
    >
      {Math.round(layout.width) + ' x ' + Math.round(layout.height)}
    </div> */}
  </motion.div>
);

const Album = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div className='photos__container'>
      <PhotoAlbum
        layout='masonry'
        photos={photos}
        renderContainer={renderContainer}
        columns={(containerWidth) => {
          if (containerWidth < 768) return 2;
          if (containerWidth < 1024) return 3;
          return 5;
        }}
        onClick={({ index }) => setIndex(index)}
        renderPhoto={renderPhoto}
      />
      <Lightbox
        slides={Array.from(photos)}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default Album;
