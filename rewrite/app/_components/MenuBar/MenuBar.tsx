import styles from './MenuBar.module.css';

export default function MenuBar() {
    return (
        <div className={styles.menubar}>
            <ul className={styles.list}>
                <li className={styles.item}><a href="#" className={styles.link}>About</a></li>
                <li className={styles.item}><a href="#" className={styles.link}>Product</a></li>
                <li className={styles.item}><a href="#" className={styles.link}>News</a></li>
                <li className={styles.item}><a href="#" className={styles.link}>Access</a></li>
                <li className={styles.item}><a href="#" className={styles.link}>Contact</a></li>
            </ul>
        </div>
    );
}