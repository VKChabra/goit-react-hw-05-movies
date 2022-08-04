import { NavLink } from 'react-router-dom';
import './active.css';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <NavLink to="/">Home</NavLink> <NavLink to="/movies">Movies</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
