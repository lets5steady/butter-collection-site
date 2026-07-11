import Link from 'next/link';
import styles from './HeaderLogo.module.css';
import Image from 'next/image';
import logo from '@/assets/logo-big.png';

export default function HeaderLogo() {
    return(
        <h1 className={styles.title}>
            <Link href="/#home" className={styles.logoLink}>
                <Image
                    src={logo}
                    alt='butter-collctionのロゴ'
                    width={240}
                    height={180}
                    priority
                />
            </Link>
        </h1>
    );
}