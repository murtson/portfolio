import React, { FC } from 'react';
import styles from './gallery.module.scss';

interface PhotoProps {
  index: number;
  imgSrc: string;
}

const Photo: FC<PhotoProps> = ({ index, imgSrc }) => {
  return (
    <figure className={styles.item}>
      <img src={imgSrc} alt={`Photo of hotel ${index}`} className={styles.photo} />
    </figure>
  );
};

const photosData: string[] = ['./hotel-1.jpg', './hotel-2.jpg', './hotel-3.jpg'];

const Gallery = () => {
  return (
    <div className={styles.root}>
      {photosData.map((src, i) => (
        <Photo imgSrc={src} index={i} />
      ))}
    </div>
  );
};

export default Gallery;
