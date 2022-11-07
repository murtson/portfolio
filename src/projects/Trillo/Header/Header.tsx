import { FC } from 'react';
import { MagnifyingGlassSolid, BookmarkSolid, CommentsSolid } from '../../../components/iconComponents';
import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.root}>
      <img src='./logo.png' alt='trillo logo' className={styles.logo} />
      <form action='#' className={styles.search}>
        <input type='text' className={styles.search__input} placeholder='Search hotels' />
        <button className={styles.search__button}>
          <MagnifyingGlassSolid className={styles.search__icon} />
        </button>
      </form>
      <nav className={styles.userNav}>
        <div className={styles.userNav__iconBox}>
          <BookmarkSolid className={styles.userNav__icon} />
          <span className={styles.userNav__notification}>7</span>
        </div>
        <div className={styles.userNav__iconBox}>
          <CommentsSolid className={styles.userNav__icon} />
          <span className={styles.userNav__notification}>1</span>
        </div>
        <div className={styles.userNav__user}>
          <img src='' alt='User photo' className={styles.userNav__userPhoto} />
          <span className={styles.userNav__userName}>Martin</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
