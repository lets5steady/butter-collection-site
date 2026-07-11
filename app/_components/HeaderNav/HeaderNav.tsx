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