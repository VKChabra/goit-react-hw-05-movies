import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navigation}>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>{' '}
        <NavLink to="/movies" className={styles.navLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
