import Image from 'next/image';
import styles from './FixedMenu.module.css';
import menu from '@/assets/menu.png';
import home from '@/assets/home.png';
import product from '@/assets/product.png';
import access from '@/assets/access.png';
import cart from '@/assets/cart.png';
import Link from 'next/link';

type FixedMenuProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FixedMenu({ setIsOpen }:FixedMenuProps) {
    return(
        <div className={styles.menu}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button type="button" className={`${styles.drawerButton} ${styles.btn}`}
                    onClick={() => setIsOpen(prev => !prev)}>
                        <Image src={menu} alt="メニュー"
                        width={24} height={24}/>
                        <p className={styles.label}>MENU</p>
                    </button>
                </li>
                <li className={styles.item}>
                    <Link href='/#home' className={styles.btn}>
                        <Image src={home} alt="ホーム"
                        width={24} height={24}/>
                        <p className={styles.label}>HOME</p>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href='/#product' className={styles.btn}>
                        <Image src={product} alt="商品"
                        width={24} height={24}/>
                        <p className={styles.label}>PRODUCT</p>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href='/#access' className={styles.btn}>
                        <Image src={access} alt="アクセス"
                        width={24} height={24}/>
                        <p className={styles.label}>ACCESS</p>
                    </Link>
                </li>
                <li className={styles.item}>
                    <button type="button" className={styles.btn}>
                        <Image src={cart} alt="カート"
                        width={24} height={24}/>
                        <p className={styles.label}>CART</p>
                    </button>
                </li>
            </ul>
        </div>
    );
}