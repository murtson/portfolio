import React from 'react';
import styles from './details.module.scss';
import { ChevronRightSolid } from '../../../components/iconComponents';

const ListItem = ({ text }: { text: string }) => {
  return (
    <li className={styles.list_item}>
      <ChevronRightSolid className={styles.item_icon} />
      <span>{text}</span>
    </li>
  );
};

const listData = ['Close to the beach', 'Nice views', 'Bring friends', 'Good food', 'perfect service'];

const Details = () => {
  return (
    <div className={styles.root}>
      <div className={styles.description}>
        <p className={styles.paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <p className={styles.paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <ul className={styles.list}>
          {listData.map((text) => (
            <ListItem text={text} />
          ))}
        </ul>
        <div className={styles.recommend}>
          <p className={styles.count}>Lucy and 3 other friends recommend this hotel</p>
          <div className={styles.friends}>
            <img src='img/user-3.jpg' alt='Friend 1' className={styles.photo} />
            <img src='img/user-3.jpg' alt='Friend 2' className={styles.photo} />
            <img src='img/user-3.jpg' alt='Friend 3' className={styles.photo} />
          </div>
        </div>
      </div>

      <div className={styles.reviews}>User reviews</div>
    </div>
  );
};

export default Details;
