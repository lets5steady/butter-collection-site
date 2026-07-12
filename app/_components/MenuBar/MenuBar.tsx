import Link from 'next/link';
import styles from './MenuBar.module.css';

export default function MenuBar() {
    return (
        <nav className={styles.menubar}>
            <ul className={styles.list}>
                <li className={styles.item}><Link href="/#home" className={styles.link}>Home</Link></li>
                <li className={styles.item}><Link href="/about" className={styles.link}>About</Link></li>
                <li className={styles.item}><Link href="/news" className={styles.link}>News</Link></li>
                <li className={styles.item}><Link href="/#product" className={styles.link}>Product</Link></li>
                <li className={styles.item}><Link href="/#access" className={styles.link}>Access</Link></li>
            </ul>
        </nav>
    );
}