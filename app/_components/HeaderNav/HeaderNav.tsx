import Link from 'next/link';
import styles from './HeaderNav.module.css';
import Image from 'next/image';

export default function HeaderNav() {
    return (
        <ul className={styles.nav}>
            <li>
                <Image
                    src='/search.png'
                    alt='検索'
                    className={styles.icon}
                    width={32}
                    height={32}
                />
            </li>
            <li>
                <Link href='/mypage'>
                    <Image
                        src='/mypage.png'
                        alt='マイページ'
                        className={styles.icon}
                        width={32}
                        height={32}
                    />
                </Link>
            </li>
            <li>
                <Link href='/cart'>
                    <Image
                        src='/cart.png'
                        alt='ショッピングカート'
                        className={styles.icon}
                        width={32}
                        height={32}
                    />
                </Link>
            </li>
        </ul>
    );
}