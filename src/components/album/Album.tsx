import { PhotoAlbum } from 'react-photo-album';
import { IPhoto } from '../../types/IPhoto';

const photo: IPhoto[] = [
  {
    src: '../../img/img (1).jpeg',
    width: 4000,
    height: 5000,
  },
  {
    src: '../../img/img (2).jpeg',
    width: 4000,
    height: 5000,
  },
  {
    src: '../../img/img (3).jpeg',
    width: 4000,
    height: 5000,
  },
];

const Album = () => {
  return <PhotoAlbum layout='masonry' photos={photo} />;
};

export default Album;
