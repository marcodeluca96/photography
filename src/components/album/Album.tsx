import PhotoAlbum, { RenderContainer } from 'react-photo-album';
import { photos } from '../../data/photos';

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

const Album = () => {
  return (
    <div className='photos__container'>
      <PhotoAlbum
        layout='masonry'
        photos={photos}
        renderContainer={renderContainer}
      />
    </div>
  );
};

export default Album;
