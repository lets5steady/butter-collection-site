import styles from './SearchButton.module.css';
import Image from 'next/image';
import search from '@/assets/search.png';
import close from '@/assets/close.png';

type SearchButtonProps = {
    onClick: () => void;
    isSearchOpen: boolean;
}

export default function SearchButton({onClick , isSearchOpen}:SearchButtonProps) {
    return(
            <div className={styles.inner}>
                <button
                    onClick={onClick}
                    aria-label={isSearchOpen ? '検索ボックスを閉じる' : '検索ボックスを開く'}>
                    <Image
                        src={isSearchOpen ? close : search}
                        alt=''
                        className={styles.icon}
                        width={32}
                        height={32}
                    />
                </button>
            </div>
    );
}