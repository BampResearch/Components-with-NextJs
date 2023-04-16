import Link from 'next/link';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import styles from './NavBar.module.css';

const Menu = () => {
  return (
    <div className={styles.menucontainer}>
      <ul>
        <li className={styles.menuitem2}>anmp. 👋</li>
        <li className={styles.menuitem}><Link href="/">Home</Link></li>
        <li className={styles.menuitem}><Link href="/aboutus">About</Link></li>
        <li className={styles.menuitem}><Link href="#">Tools</Link></li>
        <li className={styles.menuitem3}><Link href="https://twitter.com/heyanmp"><FaTwitter /></Link></li>
        <li className={styles.menuitem3}><Link target="_blank" href="https://github.com/heyanmp"><FaGithub /></Link></li>
      </ul>
    </div>
  );
};

export default Menu;
