import Link from 'next/link';
import styles from './DrawerMenu.module.css';
import Image from 'next/image';
import close from '@/assets/close.png';

type DrawerMenuProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DrawerMenu({ setIsOpen }: DrawerMenuProps) {

    const handleOverlayClick = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false)
        }
    };

    return (
        <div className={styles.overlay}
            onClick={handleOverlayClick}>
            <div className={styles.drawerMenu}>
                <button className={styles.btn}
                    onClick={() => setIsOpen(false)}>
                    <Image src={close}
                        alt="閉じるボタン"
                        width={24}
                        height={24} />
                </button>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/" className={styles.link}>
                            Search
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/" className={styles.link}>
                            MyPage
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="about" className={styles.link}>
                            About
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/" className={styles.link}>
                            News
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/" className={styles.link}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}