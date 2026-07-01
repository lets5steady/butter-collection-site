import Link from 'next/link';
import styles from './HeaderNav.module.css';
import Image from 'next/image';
import search from '@/assets/search.png';
import mypage from '@/assets/mypage.png';
import cart from '@/assets/cart.png';

export default function HeaderNav() {
    return (
        <ul className={styles.nav}>
            <li>
                <Image
                    src={search}
                    alt='検索'
                    className={styles.icon}
                    width={32}
                    height={32}
                />
            </li>
            <li>
                <Link href='/mypage'>
                    <Image
                        src={mypage}
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
                        src={cart}
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