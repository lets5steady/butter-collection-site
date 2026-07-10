import Image from 'next/image';
import styles from './Footer.module.css';
import Link from 'next/link';
import logo from '@/assets/logo-small.png';

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <h3 className={styles.title}>SHOPPING GUIDE</h3>
                <ul className={styles.guide}>
                    <li className={styles.item}>
                        <Link className={styles.link} 
                        href="/payment">お支払い方法</Link>
                    </li>

                    <li className={styles.item}>
                        <Link className={styles.link}
                        href="/delivery">配送／送料について</Link>
                    </li>

                    <li className={styles.item}>
                        <Link className={styles.link}
                        href="/legal">特定商取引法</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.container}>
                <Image
                    className={styles.logo}
                    src={logo}
                    alt='butter-collctionのロゴ'
                    width={160}
                    height={160}
                    />
                <p className={styles.cr}><small>Copyright &copy;Butter Collection1999</small></p>
            </div>
        </footer>
    );
}