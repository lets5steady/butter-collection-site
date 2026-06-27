import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css';
import HeaderNav from "../HeaderNav/HeaderNav";

export default function Header() {
    return(
        <header className={styles.header}>
            <Link href="/" className={styles.logoLink}>
                <Image
                src='/logo-big.png'
                alt='butter-collctionのロゴ'
                className={styles.logo}
                width={240}
                height={160}
                priority
                />
            </Link>
            <HeaderNav />
        </header>
    );
}
