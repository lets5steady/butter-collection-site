'use client';
import Link from 'next/link';
import styles from './HeaderNav.module.css';
import Image from 'next/image';
import mypage from '@/assets/mypage.png';
import cart from '@/assets/cart.png';
import SearchButton from '../SearchButton/SearchButton';

type HeaderNavProps = {
    onClick: () => void;
    isSearchOpen: boolean;
}

export default function HeaderNav({onClick , isSearchOpen}:HeaderNavProps) {

    return (
        <ul className={styles.nav}>
            <li>
                <SearchButton onClick={onClick} isSearchOpen={isSearchOpen}/>
            </li>
            <li>
                <Link href='/mypage' aria-label='マイページに移動'>
                    <Image
                        src={mypage}
                        alt=''
                        className={styles.icon}
                        width={32}
                        height={32}
                    />
                </Link>
            </li>
            <li>
                <Link href='/cart' aria-label='ショッピングカートに移動'>
                    <Image
                        src={cart}
                        alt=''
                        className={styles.icon}
                        width={32}
                        height={32}
                    />
                </Link>
            </li>
        </ul>
    );
}